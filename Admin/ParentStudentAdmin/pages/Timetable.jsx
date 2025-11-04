import { Clock, User } from 'lucide-react'

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const periods = ['Period 1', 'Period 2', 'Period 3', 'Period 4', 'Period 5', 'Period 6', 'Period 7', 'Period 8']

const timetable = {
  Monday: [
    { period: 1, subject: 'Mathematics', teacher: 'Mr. Smith', time: '8:00 - 8:45' },
    { period: 2, subject: 'Science', teacher: 'Mrs. Johnson', time: '8:45 - 9:30' },
    { period: 3, subject: 'English', teacher: 'Ms. Williams', time: '9:45 - 10:30' },
    { period: 4, subject: 'History', teacher: 'Mr. Brown', time: '10:30 - 11:15' },
    { period: 5, subject: 'Mathematics', teacher: 'Mr. Smith', time: '11:30 - 12:15' },
    { period: 6, subject: 'Physical Education', teacher: 'Mr. Davis', time: '12:15 - 1:00' },
    { period: 7, subject: 'Computer Science', teacher: 'Mrs. Taylor', time: '2:00 - 2:45' },
    { period: 8, subject: 'Science Lab', teacher: 'Mrs. Johnson', time: '2:45 - 3:30' },
  ],
  Tuesday: [
    { period: 1, subject: 'English', teacher: 'Ms. Williams', time: '8:00 - 8:45' },
    { period: 2, subject: 'Geography', teacher: 'Mr. Wilson', time: '8:45 - 9:30' },
    { period: 3, subject: 'Mathematics', teacher: 'Mr. Smith', time: '9:45 - 10:30' },
    { period: 4, subject: 'Science', teacher: 'Mrs. Johnson', time: '10:30 - 11:15' },
    { period: 5, subject: 'English', teacher: 'Ms. Williams', time: '11:30 - 12:15' },
    { period: 6, subject: 'Art', teacher: 'Mrs. Martinez', time: '12:15 - 1:00' },
    { period: 7, subject: 'Mathematics', teacher: 'Mr. Smith', time: '2:00 - 2:45' },
    { period: 8, subject: 'Library', teacher: 'Mrs. Anderson', time: '2:45 - 3:30' },
  ],
  Wednesday: [
    { period: 1, subject: 'Science', teacher: 'Mrs. Johnson', time: '8:00 - 8:45' },
    { period: 2, subject: 'Mathematics', teacher: 'Mr. Smith', time: '8:45 - 9:30' },
    { period: 3, subject: 'History', teacher: 'Mr. Brown', time: '9:45 - 10:30' },
    { period: 4, subject: 'English', teacher: 'Ms. Williams', time: '10:30 - 11:15' },
    { period: 5, subject: 'Geography', teacher: 'Mr. Wilson', time: '11:30 - 12:15' },
    { period: 6, subject: 'Computer Science', teacher: 'Mrs. Taylor', time: '12:15 - 1:00' },
    { period: 7, subject: 'Science Lab', teacher: 'Mrs. Johnson', time: '2:00 - 2:45' },
    { period: 8, subject: 'Physical Education', teacher: 'Mr. Davis', time: '2:45 - 3:30' },
  ],
  Thursday: [
    { period: 1, subject: 'Mathematics', teacher: 'Mr. Smith', time: '8:00 - 8:45' },
    { period: 2, subject: 'English', teacher: 'Ms. Williams', time: '8:45 - 9:30' },
    { period: 3, subject: 'Science', teacher: 'Mrs. Johnson', time: '9:45 - 10:30' },
    { period: 4, subject: 'Computer Science', teacher: 'Mrs. Taylor', time: '10:30 - 11:15' },
    { period: 5, subject: 'History', teacher: 'Mr. Brown', time: '11:30 - 12:15' },
    { period: 6, subject: 'Mathematics', teacher: 'Mr. Smith', time: '12:15 - 1:00' },
    { period: 7, subject: 'Geography', teacher: 'Mr. Wilson', time: '2:00 - 2:45' },
    { period: 8, subject: 'English', teacher: 'Ms. Williams', time: '2:45 - 3:30' },
  ],
  Friday: [
    { period: 1, subject: 'Science', teacher: 'Mrs. Johnson', time: '8:00 - 8:45' },
    { period: 2, subject: 'Mathematics', teacher: 'Mr. Smith', time: '8:45 - 9:30' },
    { period: 3, subject: 'English', teacher: 'Ms. Williams', time: '9:45 - 10:30' },
    { period: 4, subject: 'Science Lab', teacher: 'Mrs. Johnson', time: '10:30 - 11:15' },
    { period: 5, subject: 'History', teacher: 'Mr. Brown', time: '11:30 - 12:15' },
    { period: 6, subject: 'Computer Science', teacher: 'Mrs. Taylor', time: '12:15 - 1:00' },
    { period: 7, subject: 'Physical Education', teacher: 'Mr. Davis', time: '2:00 - 2:45' },
    { period: 8, subject: 'Art', teacher: 'Mrs. Martinez', time: '2:45 - 3:30' },
  ],
  Saturday: [
    { period: 1, subject: 'Mathematics', teacher: 'Mr. Smith', time: '8:00 - 8:45' },
    { period: 2, subject: 'Science', teacher: 'Mrs. Johnson', time: '8:45 - 9:30' },
    { period: 3, subject: 'English', teacher: 'Ms. Williams', time: '9:45 - 10:30' },
    { period: 4, subject: 'Geography', teacher: 'Mr. Wilson', time: '10:30 - 11:15' },
    { period: 5, subject: 'History', teacher: 'Mr. Brown', time: '11:30 - 12:15' },
    { period: 6, subject: 'Computer Science', teacher: 'Mrs. Taylor', time: '12:15 - 1:00' },
  ],
}

const getSubjectColor = (subject) => {
  const colors = {
    'Mathematics': 'bg-blue-100 text-blue-800 border-blue-300',
    'Science': 'bg-green-100 text-green-800 border-green-300',
    'English': 'bg-purple-100 text-purple-800 border-purple-300',
    'History': 'bg-yellow-100 text-yellow-800 border-yellow-300',
    'Geography': 'bg-pink-100 text-pink-800 border-pink-300',
    'Computer Science': 'bg-indigo-100 text-indigo-800 border-indigo-300',
    'Physical Education': 'bg-red-100 text-red-800 border-red-300',
    'Art': 'bg-orange-100 text-orange-800 border-orange-300',
    'Science Lab': 'bg-teal-100 text-teal-800 border-teal-300',
    'Library': 'bg-gray-100 text-gray-800 border-gray-300',
  }
  return colors[subject] || 'bg-gray-100 text-gray-800 border-gray-300'
}

export default function Timetable() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-center space-x-4">
          <Clock className="w-8 h-8" />
          <div>
            <h2 className="text-2xl font-bold">Class Timetable</h2>
            <p className="text-indigo-100 mt-1">Weekly schedule for all subjects</p>
          </div>
        </div>
      </div>

      {/* Timetable Grid - Desktop View */}
      <div className="hidden lg:block bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Period</th>
                {days.map((day) => (
                  <th key={day} className="px-4 py-3 text-center font-semibold">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {periods.map((period, periodIndex) => {
                const periodNum = periodIndex + 1
                return (
                  <tr key={periodNum} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-4 font-semibold text-gray-700 bg-gray-50">
                      {period}
                    </td>
                    {days.map((day) => {
                      const classData = timetable[day]?.find(c => c.period === periodNum)
                      return (
                        <td key={day} className="px-4 py-4">
                          {classData ? (
                            <div className={`p-3 rounded-lg border-2 ${getSubjectColor(classData.subject)}`}>
                              <p className="font-bold text-sm mb-1">{classData.subject}</p>
                              <div className="flex items-center space-x-1 text-xs mt-2">
                                <User className="w-3 h-3" />
                                <span>{classData.teacher}</span>
                              </div>
                              <p className="text-xs mt-1 opacity-75">{classData.time}</p>
                            </div>
                          ) : (
                            <div className="p-3 rounded-lg bg-gray-100 text-center">
                              <span className="text-xs text-gray-400">-</span>
                            </div>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile/Tablet View */}
      <div className="lg:hidden space-y-4">
        {days.map((day) => (
          <div key={day} className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
              {day}
            </h3>
            <div className="space-y-3">
              {timetable[day]?.map((classData) => (
                <div
                  key={classData.period}
                  className={`p-4 rounded-lg border-2 ${getSubjectColor(classData.subject)}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold bg-white bg-opacity-50 px-2 py-1 rounded">
                      Period {classData.period}
                    </span>
                    <span className="text-xs">{classData.time}</span>
                  </div>
                  <p className="font-bold text-sm mb-2">{classData.subject}</p>
                  <div className="flex items-center space-x-1 text-xs">
                    <User className="w-3 h-3" />
                    <span>{classData.teacher}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

