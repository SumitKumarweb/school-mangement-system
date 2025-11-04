import { ClipboardList, AlertCircle, Info, CheckCircle, Calendar } from 'lucide-react'

const dairyEntries = [
  {
    id: 1,
    date: '2024-03-15',
    type: 'important',
    title: 'PTM Scheduled',
    message: 'Parent-Teacher Meeting is scheduled for March 20, 2024. Please ensure your availability.',
    category: 'Notice',
  },
  {
    id: 2,
    date: '2024-03-14',
    type: 'info',
    title: 'Science Fair Preparation',
    message: 'Students should submit their science fair project proposals by March 18, 2024.',
    category: 'Academic',
  },
  {
    id: 3,
    date: '2024-03-13',
    type: 'success',
    title: 'Monthly Test Results',
    message: 'Monthly test results have been published. Check the Progress & Remarks section for details.',
    category: 'Results',
  },
  {
    id: 4,
    date: '2024-03-12',
    type: 'warning',
    title: 'Fee Payment Reminder',
    message: 'Fee payment for March is due. Please complete the payment before March 25, 2024.',
    category: 'Finance',
  },
  {
    id: 5,
    date: '2024-03-11',
    type: 'info',
    title: 'Library Books',
    message: 'All library books should be returned by the end of this month for annual inventory.',
    category: 'Library',
  },
]

const getIcon = (type) => {
  switch (type) {
    case 'important':
      return AlertCircle
    case 'success':
      return CheckCircle
    case 'warning':
      return AlertCircle
    default:
      return Info
  }
}

const getColorClass = (type) => {
  switch (type) {
    case 'important':
      return 'bg-red-50 border-red-200 text-red-800'
    case 'success':
      return 'bg-green-50 border-green-200 text-green-800'
    case 'warning':
      return 'bg-yellow-50 border-yellow-200 text-yellow-800'
    default:
      return 'bg-blue-50 border-blue-200 text-blue-800'
  }
}

export default function DailyDairy() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl p-6 text-white">
        <div className="flex items-center space-x-4">
          <ClipboardList className="w-8 h-8" />
          <div>
            <h2 className="text-2xl font-bold">Daily Dairy</h2>
            <p className="text-purple-100 mt-1">Important notices and updates</p>
          </div>
        </div>
      </div>

      {/* Dairy Entries */}
      <div className="space-y-4">
        {dairyEntries.map((entry) => {
          const Icon = getIcon(entry.type)
          const colorClass = getColorClass(entry.type)
          
          return (
            <div
              key={entry.id}
              className={`bg-white rounded-xl shadow-md p-6 border-l-4 ${colorClass} hover:shadow-lg transition-shadow`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4 flex-1">
                  <div className={`p-2 rounded-lg ${colorClass.replace('text-', 'bg-').replace('-50', '-100').replace('-800', '-600')} mt-1`}>
                    <Icon className={`w-5 h-5 ${entry.type === 'warning' ? 'text-yellow-600' : entry.type === 'important' ? 'text-red-600' : entry.type === 'success' ? 'text-green-600' : 'text-blue-600'}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{entry.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colorClass}`}>
                        {entry.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{entry.message}</p>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{entry.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Empty State (if no entries) */}
      {dairyEntries.length === 0 && (
        <div className="bg-white rounded-xl shadow-md p-12 text-center">
          <ClipboardList className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-lg text-gray-600">No dairy entries available</p>
        </div>
      )}
    </div>
  )
}

