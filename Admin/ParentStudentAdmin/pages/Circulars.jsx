import { FileText, Calendar, Download, AlertCircle, Bell, Info } from 'lucide-react'

const circulars = [
  {
    id: 1,
    title: 'Fee Payment Reminder',
    description: 'This is a reminder that the fee payment for March 2024 is due. Please complete the payment before March 25, 2024 to avoid late fees.',
    date: '2024-03-10',
    type: 'urgent',
    category: 'Finance',
    attachment: 'Fee_Reminder_March.pdf',
  },
  {
    id: 2,
    title: 'Holiday Notice - Holi',
    description: 'School will remain closed on March 25, 2024 on account of Holi festival. Classes will resume on March 26, 2024.',
    date: '2024-03-08',
    type: 'holiday',
    category: 'Holiday',
    attachment: null,
  },
  {
    id: 3,
    title: 'Library Rules Update',
    description: 'Please note the updated library rules and regulations. All students must adhere to the new guidelines.',
    date: '2024-03-05',
    type: 'notice',
    category: 'Academic',
    attachment: 'Library_Rules_2024.pdf',
  },
  {
    id: 4,
    title: 'Annual Day Celebration',
    description: 'The Annual Day celebration will be held on April 15, 2024. All students are encouraged to participate.',
    date: '2024-03-03',
    type: 'event',
    category: 'Event',
    attachment: 'Annual_Day_Notice.pdf',
  },
  {
    id: 5,
    title: 'Examination Schedule',
    description: 'Mid-term examination schedule has been released. Please check the timetable section for details.',
    date: '2024-03-01',
    type: 'notice',
    category: 'Academic',
    attachment: 'Exam_Schedule.pdf',
  },
]

const getTypeIcon = (type) => {
  switch (type) {
    case 'urgent':
      return AlertCircle
    case 'holiday':
      return Calendar
    case 'event':
      return Bell
    default:
      return Info
  }
}

const getTypeColor = (type) => {
  switch (type) {
    case 'urgent':
      return 'bg-red-100 text-red-800 border-red-300'
    case 'holiday':
      return 'bg-purple-100 text-purple-800 border-purple-300'
    case 'event':
      return 'bg-blue-100 text-blue-800 border-blue-300'
    default:
      return 'bg-gray-100 text-gray-800 border-gray-300'
  }
}

export default function Circulars() {
  const handleDownload = (attachment) => {
    if (attachment) {
      alert(`Downloading ${attachment}`)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 text-white">
        <div className="flex items-center space-x-4">
          <FileText className="w-8 h-8" />
          <div>
            <h2 className="text-2xl font-bold">Circulars & Notices</h2>
            <p className="text-blue-100 mt-1">Important announcements and updates</p>
          </div>
        </div>
      </div>

      {/* Circulars List */}
      <div className="grid grid-cols-1 gap-6">
        {circulars.map((circular) => {
          const Icon = getTypeIcon(circular.type)
          const typeColor = getTypeColor(circular.type)
          
          return (
            <div
              key={circular.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4 flex-1">
                  <div className={`p-3 rounded-lg ${typeColor} flex-shrink-0`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2 flex-wrap">
                      <h3 className="text-xl font-bold text-gray-800">{circular.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${typeColor}`}>
                        {circular.category}
                      </span>
                      {circular.type === 'urgent' && (
                        <span className="px-2 py-1 bg-red-500 text-white rounded-full text-xs font-semibold">
                          URGENT
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-3">{circular.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{circular.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Attachment */}
              {circular.attachment && (
                <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-gray-400" />
                    <span className="text-sm font-medium text-gray-700">{circular.attachment}</span>
                  </div>
                  <button
                    onClick={() => handleDownload(circular.attachment)}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

