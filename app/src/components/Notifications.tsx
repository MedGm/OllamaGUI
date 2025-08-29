import React from 'react'
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react'
import { create } from 'zustand'

type NotificationType = 'success' | 'error' | 'info' | 'warning'

interface Notification {
  id: string
  type: NotificationType
  title: string
  message: string
  duration?: number // auto-dismiss after ms (0 = no auto-dismiss)
}

interface NotificationState {
  notifications: Notification[]
  addNotification: (notification: Omit<Notification, 'id'>) => void
  removeNotification: (id: string) => void
  clearAll: () => void
}

export const useNotificationStore = create<NotificationState>((set) => ({
  notifications: [],
  
  addNotification: (notification) => {
    const id = Date.now().toString()
    const newNotification = { ...notification, id }
    
    set((state) => ({
      notifications: [...state.notifications, newNotification]
    }))
    
    // Auto-dismiss if duration is set
    if (notification.duration && notification.duration > 0) {
      setTimeout(() => {
        set((state) => ({
          notifications: state.notifications.filter(n => n.id !== id)
        }))
      }, notification.duration)
    }
  },
  
  removeNotification: (id) => {
    set((state) => ({
      notifications: state.notifications.filter(n => n.id !== id)
    }))
  },
  
  clearAll: () => {
    set({ notifications: [] })
  }
}))

export const NotificationContainer: React.FC = () => {
  const { notifications, removeNotification } = useNotificationStore()
  
  if (notifications.length === 0) return null
  
  const getIcon = (type: NotificationType) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-600" />
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-amber-600" />
      case 'info':
      default:
        return <Info className="w-5 h-5 text-blue-600" />
    }
  }
  
  const getStyles = (type: NotificationType) => {
    switch (type) {
      case 'success':
        return 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20'
      case 'error':
        return 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20'
      case 'warning':
        return 'border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20'
      case 'info':
      default:
        return 'border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20'
    }
  }
  
  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 max-w-md">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`p-4 border rounded-lg shadow-lg ${getStyles(notification.type)} 
            animate-in slide-in-from-right-full duration-300`}
        >
          <div className="flex items-start gap-3">
            {getIcon(notification.type)}
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {notification.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                {notification.message}
              </p>
            </div>
            <button
              onClick={() => removeNotification(notification.id)}
              className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

// Helper hook for easy notification usage
export const useNotifications = () => {
  const { addNotification } = useNotificationStore()
  
  return {
    showSuccess: (title: string, message: string, duration = 5000) => 
      addNotification({ type: 'success', title, message, duration }),
    showError: (title: string, message: string, duration = 0) => 
      addNotification({ type: 'error', title, message, duration }),
    showInfo: (title: string, message: string, duration = 5000) => 
      addNotification({ type: 'info', title, message, duration }),
    showWarning: (title: string, message: string, duration = 7000) => 
      addNotification({ type: 'warning', title, message, duration }),
  }
}
