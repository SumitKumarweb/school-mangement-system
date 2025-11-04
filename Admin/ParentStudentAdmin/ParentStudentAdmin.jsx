import { useState, useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard,
  User,
  Calendar,
  BookOpen,
  ClipboardList,
  FileText,
  Clock,
  TrendingUp,
  Receipt,
  MessageSquare,
  Bell,
  Images,
  Menu,
  X,
  LogOut,
  ChevronRight,
  UserCircle,
  Check,
  Trash2
} from 'lucide-react'
import Dashboard from './pages/Dashboard'
import ParentDashboard from './pages/ParentDashboard'
import DailyAttendance from './pages/DailyAttendance'
import Homework from './pages/Homework'
import DailyDairy from './pages/DailyDairy'
import Circulars from './pages/Circulars'
import Timetable from './pages/Timetable'
import ProgressRemarks from './pages/ProgressRemarks'
import FeesDetails from './pages/FeesDetails'
import Communication from './pages/Communication'
import NewsEvents from './pages/NewsEvents'
import PhotoGallery from './pages/PhotoGallery'
import Profile from './pages/Profile'

const menuItems = [
  { path: '/parent-student/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/parent-student/parent-dashboard', label: 'Parent Dashboard', icon: User },
  { path: '/parent-student/profile', label: 'Profile', icon: UserCircle },
  { path: '/parent-student/attendance', label: 'Daily Attendance', icon: Calendar },
  { path: '/parent-student/homework', label: 'Homework', icon: BookOpen },
  { path: '/parent-student/daily-dairy', label: 'Daily Dairy', icon: ClipboardList },
  { path: '/parent-student/circulars', label: 'Circulars', icon: FileText },
  { path: '/parent-student/timetable', label: 'Timetable', icon: Clock },
  { path: '/parent-student/progress', label: 'Progress & Remarks', icon: TrendingUp },
  { path: '/parent-student/fees', label: 'Fees Details', icon: Receipt },
  { path: '/parent-student/communication', label: 'Communication', icon: MessageSquare },
  { path: '/parent-student/news-events', label: 'News & Events', icon: Bell },
  { path: '/parent-student/gallery', label: 'Photo Gallery', icon: Images },
]

// Sample notifications data
const notifications = [
  {
    id: 1,
    title: 'New Homework Assigned',
    message: 'Mathematics homework has been assigned. Due date: Tomorrow',
    time: '5 minutes ago',
    type: 'homework',
    unread: true,
  },
  {
    id: 2,
    title: 'Fee Payment Reminder',
    message: 'Your fee payment of ₹2,500 is due on March 15, 2024',
    time: '1 hour ago',
    type: 'fee',
    unread: true,
  },
  {
    id: 3,
    title: 'Parent-Teacher Meeting',
    message: 'PTM scheduled for March 20, 2024 at 2:00 PM',
    time: '2 hours ago',
    type: 'meeting',
    unread: true,
  },
  {
    id: 4,
    title: 'Attendance Alert',
    message: 'You have been marked absent for today. Please submit leave application.',
    time: '3 hours ago',
    type: 'attendance',
    unread: false,
  },
  {
    id: 5,
    title: 'New Circular',
    message: 'A new circular has been published. Please check the circulars section.',
    time: '1 day ago',
    type: 'circular',
    unread: false,
  },
  {
    id: 6,
    title: 'Progress Report',
    message: 'Your monthly progress report is now available for review.',
    time: '2 days ago',
    type: 'progress',
    unread: false,
  },
]

function ParentStudentAdmin() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [notificationList, setNotificationList] = useState(notifications)
  const notificationRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  const currentPath = location.pathname
  
  useEffect(() => {
    // Handle default path or redirect to dashboard
    if (currentPath === '/parent-student' || currentPath === '/parent-student/') {
      navigate('/parent-student/dashboard', { replace: true })
    }
  }, [currentPath, navigate])

  // Close notifications dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setNotificationsOpen(false)
      }
    }

    if (notificationsOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [notificationsOpen])
  
  const currentPage = menuItems.find(item => currentPath === item.path) || menuItems[0]

  const unreadCount = notificationList.filter(n => n.unread).length

  const handleNotificationClick = (notification) => {
    // Mark as read
    setNotificationList(prev =>
      prev.map(n =>
        n.id === notification.id ? { ...n, unread: false } : n
      )
    )
    // Navigate based on notification type
    switch (notification.type) {
      case 'homework':
        navigate('/parent-student/homework')
        break
      case 'fee':
        navigate('/parent-student/fees')
        break
      case 'attendance':
        navigate('/parent-student/attendance')
        break
      case 'circular':
        navigate('/parent-student/circulars')
        break
      case 'progress':
        navigate('/parent-student/progress')
        break
      default:
        break
    }
    setNotificationsOpen(false)
  }

  const markAllAsRead = () => {
    setNotificationList(prev =>
      prev.map(n => ({ ...n, unread: false }))
    )
  }

  const clearAllNotifications = () => {
    setNotificationList([])
  }

  const handleNavigation = (path) => {
    navigate(path)
    setMobileSidebarOpen(false)
  }

  const renderContent = () => {
    switch (currentPath) {
      case '/parent-student/dashboard':
        return <Dashboard />
      case '/parent-student/parent-dashboard':
        return <ParentDashboard />
      case '/parent-student/profile':
        return <Profile />
      case '/parent-student/attendance':
        return <DailyAttendance />
      case '/parent-student/homework':
        return <Homework />
      case '/parent-student/daily-dairy':
        return <DailyDairy />
      case '/parent-student/circulars':
        return <Circulars />
      case '/parent-student/timetable':
        return <Timetable />
      case '/parent-student/progress':
        return <ProgressRemarks />
      case '/parent-student/fees':
        return <FeesDetails />
      case '/parent-student/communication':
        return <Communication />
      case '/parent-student/news-events':
        return <NewsEvents />
      case '/parent-student/gallery':
        return <PhotoGallery />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-gradient-to-b from-blue-600 to-blue-800 text-white fixed lg:static h-full z-50 transition-all duration-300 ease-in-out ${
          mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo/Header */}
          <div className="p-4 border-b border-blue-500 flex items-center justify-between">
            {sidebarOpen && (
              <h1 className="text-xl font-bold text-white">Student Portal</h1>
            )}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:block hidden p-2 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileSidebarOpen(false)}
              className="lg:hidden p-2 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Profile Card */}
          <button
            onClick={() => handleNavigation('/parent-student/profile')}
            className="w-full p-4 border-b border-blue-500 hover:bg-blue-700 transition-colors text-left"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center text-lg font-bold">
                JD
              </div>
              {sidebarOpen && (
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm truncate">John Doe</p>
                  <p className="text-xs text-blue-200 truncate">Adm No: 2024001</p>
                </div>
              )}
            </div>
          </button>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = currentPath === item.path
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg mb-2 transition-all ${
                    isActive
                      ? 'bg-white text-blue-600 shadow-lg'
                      : 'hover:bg-blue-700 text-white'
                  }`}
                >
                  <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-blue-600' : ''}`} />
                  {sidebarOpen && (
                    <span className="text-sm font-medium">{item.label}</span>
                  )}
                  {isActive && sidebarOpen && (
                    <ChevronRight className="w-4 h-4 ml-auto" />
                  )}
                </button>
              )
            })}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-blue-500">
            <button
              onClick={() => navigate('/login')}
              className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 text-white transition-all"
            >
              <LogOut className="w-5 h-5" />
              {sidebarOpen && <span className="text-sm font-medium">Logout</span>}
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => setMobileSidebarOpen(true)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
          <div className="flex-1 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-800">{currentPage.label}</h2>
              <p className="text-sm text-gray-500">Welcome back, John Doe</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative" ref={notificationRef}>
                <button
                  onClick={() => setNotificationsOpen(!notificationsOpen)}
                  className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Bell className="w-5 h-5 text-gray-600" />
                  {unreadCount > 0 && (
                    <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                      {unreadCount > 9 ? '9+' : unreadCount}
                    </span>
                  )}
                </button>

                {/* Notifications Dropdown */}
                {notificationsOpen && (
                  <div className="absolute right-0 mt-2 w-80 md:w-96 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 max-h-[600px] flex flex-col">
                    {/* Header */}
                    <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gradient-to-r from-blue-500 to-cyan-600 rounded-t-xl">
                      <div className="flex items-center space-x-2">
                        <Bell className="w-5 h-5 text-white" />
                        <h3 className="text-lg font-bold text-white">Notifications</h3>
                        {unreadCount > 0 && (
                          <span className="bg-white text-blue-600 text-xs px-2 py-1 rounded-full font-bold">
                            {unreadCount} new
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        {unreadCount > 0 && (
                          <button
                            onClick={markAllAsRead}
                            className="p-1.5 hover:bg-blue-700 rounded-lg transition-colors"
                            title="Mark all as read"
                          >
                            <Check className="w-4 h-4 text-white" />
                          </button>
                        )}
                        {notificationList.length > 0 && (
                          <button
                            onClick={clearAllNotifications}
                            className="p-1.5 hover:bg-blue-700 rounded-lg transition-colors"
                            title="Clear all"
                          >
                            <Trash2 className="w-4 h-4 text-white" />
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Notifications List */}
                    <div className="overflow-y-auto flex-1 max-h-[500px]">
                      {notificationList.length === 0 ? (
                        <div className="p-8 text-center">
                          <Bell className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                          <p className="text-gray-500 font-medium">No notifications</p>
                          <p className="text-sm text-gray-400 mt-1">You're all caught up!</p>
                        </div>
                      ) : (
                        <div className="divide-y divide-gray-100">
                          {notificationList.map((notification) => (
                            <button
                              key={notification.id}
                              onClick={() => handleNotificationClick(notification)}
                              className={`w-full text-left p-4 hover:bg-blue-50 transition-colors ${
                                notification.unread ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                              }`}
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center space-x-2 mb-1">
                                    <p className={`font-semibold text-sm ${
                                      notification.unread ? 'text-blue-800' : 'text-gray-800'
                                    }`}>
                                      {notification.title}
                                    </p>
                                    {notification.unread && (
                                      <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                                    )}
                                  </div>
                                  <p className="text-sm text-gray-600 line-clamp-2">
                                    {notification.message}
                                  </p>
                                  <p className="text-xs text-gray-400 mt-2">
                                    {notification.time}
                                  </p>
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Footer */}
                    {notificationList.length > 0 && (
                      <div className="p-3 border-t border-gray-200 bg-gray-50 rounded-b-xl">
                        <button
                          onClick={() => navigate('/parent-student/news-events')}
                          className="w-full text-center text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors"
                        >
                          View All Notifications
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <button
                onClick={() => handleNavigation('/parent-student/profile')}
                className="w-8 h-8 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors cursor-pointer"
              ></button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}

export default ParentStudentAdmin

