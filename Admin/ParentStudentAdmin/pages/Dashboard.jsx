import { Calendar, BookOpen, Bell, DollarSign, TrendingUp, ClipboardCheck } from 'lucide-react'
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const attendanceData = [
  { name: 'Present', value: 85, color: '#10b981' },
  { name: 'Absent', value: 10, color: '#ef4444' },
  { name: 'Leave', value: 5, color: '#f59e0b' },
]

const monthlyAttendance = [
  { month: 'Jan', present: 22, absent: 3 },
  { month: 'Feb', present: 20, absent: 5 },
  { month: 'Mar', present: 23, absent: 2 },
  { month: 'Apr', present: 21, absent: 4 },
]

const stats = [
  { label: 'Today\'s Attendance', value: 'Present', icon: Calendar, color: 'bg-green-500' },
  { label: 'Fee Due', value: '₹2,500', icon: DollarSign, color: 'bg-red-500' },
  { label: 'Pending Homework', value: '3', icon: BookOpen, color: 'bg-yellow-500' },
  { label: 'New Notices', value: '5', icon: Bell, color: 'bg-blue-500' },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-800 mt-2">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Attendance Chart */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center space-x-4 mb-6">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-bold text-gray-800">Attendance Overview</h3>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={attendanceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {attendanceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Today's Homework */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center space-x-4 mb-6">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-bold text-gray-800">Today's Homework</h3>
          </div>
          <div className="space-y-4">
            {[
              { subject: 'Mathematics', description: 'Complete exercises 5.1 to 5.5', due: 'Tomorrow' },
              { subject: 'Science', description: 'Write lab report for experiment 3', due: '2 days' },
              { subject: 'English', description: 'Read chapter 4 and write summary', due: '3 days' },
            ].map((hw, index) => (
              <div key={index} className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-gray-800">{hw.subject}</p>
                    <p className="text-sm text-gray-600 mt-1">{hw.description}</p>
                  </div>
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-medium">
                    Due: {hw.due}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* News & Events */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center space-x-4 mb-6">
            <Bell className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-bold text-gray-800">News & Events</h3>
          </div>
          <div className="space-y-4">
            {[
              { title: 'Annual Sports Day', date: 'March 15, 2024', type: 'event' },
              { title: 'Parent-Teacher Meeting', date: 'March 20, 2024', type: 'notice' },
              { title: 'Science Fair Exhibition', date: 'March 25, 2024', type: 'event' },
            ].map((item, index) => (
              <div key={index} className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                <p className="font-semibold text-gray-800">{item.title}</p>
                <p className="text-sm text-gray-600 mt-1">{item.date}</p>
                <span className={`text-xs mt-2 inline-block px-2 py-1 rounded-full ${
                  item.type === 'event' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {item.type === 'event' ? 'Event' : 'Notice'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Attendance Bar Chart */}
        <div className="bg-white rounded-xl shadow-md p-6 lg:col-span-2">
          <div className="flex items-center space-x-4 mb-6">
            <ClipboardCheck className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-bold text-gray-800">Monthly Attendance</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyAttendance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="present" fill="#10b981" name="Present Days" />
              <Bar dataKey="absent" fill="#ef4444" name="Absent Days" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Communication Box */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center space-x-4 mb-6">
            <Bell className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-bold text-gray-800">Recent Communications</h3>
          </div>
          <div className="space-y-4">
            {[
              { from: 'Teacher - Math', message: 'Great progress in today\'s class!', time: '2 hours ago' },
              { from: 'Principal', message: 'Monthly test schedule released', time: '1 day ago' },
              { from: 'Class Teacher', message: 'PTM scheduled for next week', time: '2 days ago' },
            ].map((comm, index) => (
              <div key={index} className="p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="font-semibold text-gray-800">{comm.from}</p>
                <p className="text-sm text-gray-600 mt-1">{comm.message}</p>
                <p className="text-xs text-gray-500 mt-2">{comm.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Circular & Notices */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center space-x-4 mb-6">
            <ClipboardCheck className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-bold text-gray-800">Circular & Notices</h3>
          </div>
          <div className="space-y-4">
            {[
              { title: 'Fee Payment Reminder', date: 'March 10, 2024', urgent: true },
              { title: 'Holiday Notice - Holi', date: 'March 8, 2024', urgent: false },
              { title: 'Library Rules Update', date: 'March 5, 2024', urgent: false },
            ].map((circular, index) => (
              <div key={index} className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-gray-800">{circular.title}</p>
                    <p className="text-sm text-gray-600 mt-1">{circular.date}</p>
                  </div>
                  {circular.urgent && (
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full font-medium">
                      Urgent
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

