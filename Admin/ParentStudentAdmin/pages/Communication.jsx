import { useState } from 'react'
import { MessageSquare, Send, User, Search } from 'lucide-react'

const communications = [
  {
    id: 1,
    from: 'Mr. Smith',
    role: 'Teacher - Mathematics',
    message: 'Great progress in today\'s class! Keep up the excellent work.',
    timestamp: '2 hours ago',
    type: 'teacher',
    unread: true,
  },
  {
    id: 2,
    from: 'Principal',
    role: 'Principal',
    message: 'Monthly test schedule has been released. Please check the timetable section.',
    timestamp: '1 day ago',
    type: 'principal',
    unread: true,
  },
  {
    id: 3,
    from: 'Mrs. Johnson',
    role: 'Class Teacher - Science',
    message: 'Parent-Teacher Meeting scheduled for next week. Please confirm your availability.',
    timestamp: '2 days ago',
    type: 'teacher',
    unread: false,
  },
  {
    id: 4,
    from: 'Administration',
    role: 'Admin',
    message: 'Fee payment reminder: Please complete the payment before the due date.',
    timestamp: '3 days ago',
    type: 'admin',
    unread: false,
  },
  {
    id: 5,
    from: 'Mr. Brown',
    role: 'Teacher - History',
    message: 'Excellent performance in the history project. Well done!',
    timestamp: '4 days ago',
    type: 'teacher',
    unread: false,
  },
]

const roleColors = {
  teacher: 'bg-blue-100 text-blue-800',
  principal: 'bg-purple-100 text-purple-800',
  admin: 'bg-green-100 text-green-800',
  parent: 'bg-orange-100 text-orange-800',
  student: 'bg-pink-100 text-pink-800',
}

export default function Communication() {
  const [selectedRole, setSelectedRole] = useState('all')
  const [selectedMessage, setSelectedMessage] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const roles = [
    { id: 'all', label: 'All' },
    { id: 'teacher', label: 'Teachers' },
    { id: 'principal', label: 'Principal' },
    { id: 'admin', label: 'Administration' },
    { id: 'parent', label: 'Parents' },
    { id: 'student', label: 'Students' },
  ]

  const filteredCommunications = communications.filter((comm) => {
    const matchesRole = selectedRole === 'all' || comm.type === selectedRole
    const matchesSearch = comm.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         comm.message.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesRole && matchesSearch
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl p-6 text-white">
        <div className="flex items-center space-x-4">
          <MessageSquare className="w-8 h-8" />
          <div>
            <h2 className="text-2xl font-bold">Communication</h2>
            <p className="text-blue-100 mt-1">Stay connected with teachers and staff</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sidebar - Filters and List */}
        <div className="lg:col-span-1 space-y-4">
          {/* Search */}
          <div className="bg-white rounded-xl shadow-md p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search messages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Role Filter */}
          <div className="bg-white rounded-xl shadow-md p-4">
            <h3 className="font-semibold text-gray-800 mb-3">Filter by Role</h3>
            <div className="space-y-2">
              {roles.map((role) => (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all ${
                    selectedRole === role.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {role.label}
                </button>
              ))}
            </div>
          </div>

          {/* Messages List */}
          <div className="bg-white rounded-xl shadow-md p-4 max-h-[500px] overflow-y-auto">
            <h3 className="font-semibold text-gray-800 mb-3">Messages</h3>
            <div className="space-y-3">
              {filteredCommunications.map((comm) => (
                <button
                  key={comm.id}
                  onClick={() => setSelectedMessage(comm)}
                  className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                    selectedMessage?.id === comm.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                  } ${comm.unread ? 'bg-blue-50' : ''}`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <p className={`font-semibold text-sm ${comm.unread ? 'text-blue-800' : 'text-gray-800'}`}>
                        {comm.from}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{comm.role}</p>
                    </div>
                    {comm.unread && (
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    )}
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2">{comm.message}</p>
                  <p className="text-xs text-gray-400 mt-2">{comm.timestamp}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content - Message Detail */}
        <div className="lg:col-span-2">
          {selectedMessage ? (
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                        {selectedMessage.from.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{selectedMessage.from}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full font-semibold ${roleColors[selectedMessage.type] || roleColors.admin}`}>
                          {selectedMessage.role}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{selectedMessage.timestamp}</span>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed">{selectedMessage.message}</p>
              </div>

              {/* Reply Section */}
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-gray-800 mb-3">Reply</h4>
                <textarea
                  placeholder="Type your reply here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3"
                  rows="4"
                />
                <button className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Send className="w-4 h-4" />
                  <span>Send Reply</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-md p-12 text-center">
              <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-lg text-gray-600">Select a message to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

