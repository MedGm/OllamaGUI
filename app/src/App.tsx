import './App.css'
import Sidebar from './components/Sidebar.tsx'
import MainPanel from './components/MainPanel.tsx'
import TopBar from './components/TopBar.tsx'
import ModelsRoute from './routes/models'
import SettingsRoute from './routes/settings'
import { useUIStore } from './store/uiStore'

function App() {
  const { view } = useUIStore()
  return (
    <div className="flex h-screen bg-white text-gray-900">
      {/* Left Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBar />
        {view === 'chat' && <MainPanel />}
        {view === 'models' && <div className="flex-1 overflow-auto"><ModelsRoute /></div>}
        {view === 'settings' && <div className="flex-1 overflow-auto"><SettingsRoute /></div>}
      </div>
    </div>
  )
}

export default App
