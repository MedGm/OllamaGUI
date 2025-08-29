import { Activity, Cpu, HardDrive, Network } from 'lucide-react'
import React, { useEffect } from 'react'
import { useMonitoringStore } from '../store/monitoringStore'

// Basic error boundary to isolate dashboard rendering issues
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props as any)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch(error: any, info: any) {
    console.error('MonitoringDashboard error boundary caught:', error, info)
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 max-w-3xl mx-auto">
          <div className="bg-red-50 border border-red-200 text-red-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-2">Monitoring dashboard encountered an error</h2>
            <p className="text-sm opacity-80">Try reopening this tab. If it persists, please report with console logs.</p>
          </div>
        </div>
      )
    }
    return this.props.children as any
  }
}

// Individual metric card component
interface MetricCardProps {
  title: string
  value: string
  subtitle?: string
  icon: React.ReactNode
  color: 'blue' | 'green' | 'yellow' | 'red' | 'purple'
  trend?: 'up' | 'down' | 'stable'
}

function MetricCard({ title, value, subtitle, icon, color, trend }: MetricCardProps) {
  const colorClasses = {
    blue: 'from-blue-50 to-indigo-50 border-blue-200 text-blue-900',
    green: 'from-green-50 to-emerald-50 border-green-200 text-green-900', 
    yellow: 'from-amber-50 to-orange-50 border-amber-200 text-amber-900',
    red: 'from-red-50 to-rose-50 border-red-200 text-red-900',
    purple: 'from-purple-50 to-violet-50 border-purple-200 text-purple-900'
  }
  
  const iconColorClasses = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    yellow: 'text-amber-600', 
    red: 'text-red-600',
    purple: 'text-purple-600'
  }
  
  return (
    <div className={`bg-gradient-to-br ${colorClasses[color]} border rounded-2xl p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 group`}>
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl bg-white/60 group-hover:bg-white/80 transition-all duration-200 ${iconColorClasses[color]}`}>
          {icon}
        </div>
        {trend && (
          <div className={`text-xs px-2 py-1 rounded-full bg-white/60 ${
            trend === 'up' ? 'text-green-700' : 
            trend === 'down' ? 'text-red-700' : 'text-gray-700'
          }`}>
            {trend === 'up' ? '↗' : trend === 'down' ? '↘' : '→'} {trend}
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
        <div className="text-2xl font-bold">{value}</div>
        {subtitle && (
          <p className="text-sm text-gray-600">{subtitle}</p>
        )}
      </div>
    </div>
  )
}

// Simple chart component for metrics history
interface ChartProps {
  data: number[]
  color: string
  height?: number
}

function SimpleChart({ data, color, height = 60 }: ChartProps) {
  // Sanitize data: keep finite numbers only
  const clean = data.filter((v) => typeof v === 'number' && Number.isFinite(v))
  if (clean.length < 2) return null // Need at least 2 points to draw a path with percentages

  const max = Math.max(...clean)
  const min = Math.min(...clean)
  const range = max - min || 1

  const points = clean.map((value, index) => {
    const denom = clean.length - 1
    const xPct = denom > 0 ? (index / denom) * 100 : 0
    const y = height - ((value - min) / range) * height
    return { xPct, y }
  })

  const areaD = `M 0 ${height} ` + points.map((p) => `L ${p.xPct}% ${p.y}`).join(' ') + ` L 100% ${height} Z`
  const lineD = `M ` + points.map((p) => `${p.xPct}% ${p.y}`).join(' L ')

  return (
    <div className="w-full" style={{ height }}>
      <svg width="100%" height={height} className="overflow-visible">
        <defs>
          <linearGradient id={`gradient-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Draw the area */}
        <path d={areaD} fill={`url(#gradient-${color})`} stroke="none" />

        {/* Draw the line */}
        <path d={lineD} fill="none" stroke={color} strokeWidth="2" className="drop-shadow-sm" />
      </svg>
    </div>
  )
}

function MonitoringDashboardInner() {
  const {
    systemMetrics,
    currentSystemMetrics,
    currentModelMetrics,
    ollamaStatus,
    isMonitoring,
    startMonitoring,
    stopMonitoring,
    getSystemHealth,
    getOllamaStatus
  } = useMonitoringStore()
  
  useEffect(() => {
    // Load initial data
    getSystemHealth()
    getOllamaStatus()
    
    // Auto-start monitoring
    if (!isMonitoring) {
      startMonitoring()
    }
    
  // Cleanup on unmount: always attempt to stop to avoid lingering tasks
  return () => { stopMonitoring() }
  }, [])
  
  // Format bytes to human readable
  const formatBytes = (bytes: number) => {
    if (!Number.isFinite(bytes) || bytes <= 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`
  }
  
  // Format uptime
  const formatUptime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    return `${hours}h ${minutes}m`
  }
  
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">System Monitoring</h1>
          <p className="text-gray-600">Real-time performance and status dashboard</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-xl ${
            isMonitoring 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-gray-100 text-gray-700 border border-gray-200'
          }`}>
            <div className={`w-2 h-2 rounded-full ${
              isMonitoring ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
            }`}></div>
            <span className="text-sm font-medium">
              {isMonitoring ? 'Monitoring Active' : 'Monitoring Stopped'}
            </span>
          </div>
          
          <button
            onClick={isMonitoring ? stopMonitoring : startMonitoring}
            className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-200 ${
              isMonitoring
                ? 'bg-red-600 hover:bg-red-700 text-white shadow-sm hover:shadow-md'
                : 'bg-green-600 hover:bg-green-700 text-white shadow-sm hover:shadow-md'
            }`}
          >
            {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
          </button>
        </div>
      </div>
      
      {/* System Metrics Grid */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">System Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="CPU Usage"
            value={`${(Number.isFinite(currentSystemMetrics?.cpuUsage) ? (currentSystemMetrics!.cpuUsage as number) : 0).toFixed(1)}%`}
            icon={<Cpu size={24} />}
            color="blue"
            trend="stable"
          />
          
          <MetricCard
            title="Memory Usage"
            value={(Number.isFinite(currentSystemMetrics?.memoryTotal) && (currentSystemMetrics!.memoryTotal as number) > 0)
              ? `${(((currentSystemMetrics!.memoryUsage ?? 0) / (currentSystemMetrics!.memoryTotal as number)) * 100).toFixed(1)}%`
              : '0.0%'}
            subtitle={(Number.isFinite(currentSystemMetrics?.memoryUsage) && Number.isFinite(currentSystemMetrics?.memoryTotal))
              ? `${formatBytes(currentSystemMetrics!.memoryUsage as number)} / ${formatBytes(currentSystemMetrics!.memoryTotal as number)}`
              : 'No data'}
            icon={<HardDrive size={24} />}
            color="green"
            trend="stable"
          />
          
          <MetricCard
            title="Network Activity"
            value={`${formatBytes(((currentSystemMetrics?.networkRx ?? 0) + (currentSystemMetrics?.networkTx ?? 0)) as number)}/s`}
            subtitle={`↓ ${formatBytes((currentSystemMetrics?.networkRx ?? 0) as number)}/s ↑ ${formatBytes((currentSystemMetrics?.networkTx ?? 0) as number)}/s`}
            icon={<Network size={24} />}
            color="purple"
            trend="up"
          />
          
          <MetricCard
            title="Ollama Status"
            value={ollamaStatus?.serverHealth === 'healthy' ? 'Healthy' : 
                   ollamaStatus?.serverHealth === 'warning' ? 'Warning' : 'Offline'}
            subtitle={ollamaStatus ? 
              `${ollamaStatus.modelsLoaded?.length || 0} models loaded` : 
              'Status unknown'
            }
            icon={<Activity size={24} />}
            color={ollamaStatus?.serverHealth === 'healthy' ? 'green' : 
                   ollamaStatus?.serverHealth === 'warning' ? 'yellow' : 'red'}
            trend="stable"
          />
        </div>
      </div>
      
      {/* Performance Charts */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Performance History</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">CPU Usage Over Time</h3>
            <SimpleChart 
              data={systemMetrics
                .map((m) => (Number.isFinite(m.cpuUsage) ? (m.cpuUsage as number) : NaN))
                .filter((v) => Number.isFinite(v)) as number[]} 
              color="#3B82F6"
              height={120}
            />
          </div>
          
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Memory Usage Over Time</h3>
            <SimpleChart 
              data={systemMetrics
                .map((m) => (m.memoryTotal > 0 && Number.isFinite(m.memoryUsage) && Number.isFinite(m.memoryTotal)
                  ? ((m.memoryUsage as number) / (m.memoryTotal as number)) * 100
                  : NaN))
                .filter((v) => Number.isFinite(v)) as number[]} 
              color="#10B981"
              height={120}
            />
          </div>
        </div>
      </div>
      
      {/* Model Performance */}
      {Object.keys(currentModelMetrics).length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Model Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(currentModelMetrics).map(([modelName, metrics]) => (
              <div key={modelName} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full"></div>
                  <h3 className="text-lg font-semibold text-gray-900 truncate">{modelName}</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Token Rate</span>
                    <span className="text-sm font-semibold text-gray-900">
                      {Number.isFinite((metrics as any)?.tokenRate)
                        ? `${((metrics as any).tokenRate as number).toFixed(1)} tokens/s`
                        : '—'}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Response Time</span>
                    <span className="text-sm font-semibold text-gray-900">
                      {Number.isFinite((metrics as any)?.responseTime)
                        ? `${(metrics as any).responseTime}ms`
                        : '—'}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Memory Usage</span>
                    <span className="text-sm font-semibold text-gray-900">
                      {formatBytes(Number.isFinite((metrics as any)?.memoryUsage) ? (metrics as any).memoryUsage : 0)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Requests</span>
                    <span className="text-sm font-semibold text-gray-900">
                      {Number.isFinite((metrics as any)?.totalRequests) ? (metrics as any).totalRequests : 0}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Ollama Server Details */}
      {ollamaStatus && (
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Ollama Server</h2>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Version</h4>
                <p className="text-lg font-bold text-gray-900">{ollamaStatus.version}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Uptime</h4>
                <p className="text-lg font-bold text-gray-900">{formatUptime(ollamaStatus.uptime)}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Active Streams</h4>
                <p className="text-lg font-bold text-gray-900">{ollamaStatus.activeStreams}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Queue Length</h4>
                <p className="text-lg font-bold text-gray-900">{ollamaStatus.queueLength}</p>
              </div>
            </div>
            
            {ollamaStatus.modelsLoaded && ollamaStatus.modelsLoaded.length > 0 && (
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Loaded Models</h4>
                <div className="flex flex-wrap gap-2">
                  {ollamaStatus.modelsLoaded.map(model => (
                    <span 
                      key={model}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg font-medium"
                    >
                      {model}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default function MonitoringDashboard() {
  return (
    <ErrorBoundary>
      <MonitoringDashboardInner />
    </ErrorBoundary>
  )
}
