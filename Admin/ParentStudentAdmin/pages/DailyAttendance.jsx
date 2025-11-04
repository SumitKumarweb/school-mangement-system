import { useState } from 'react'
import { Calendar, TrendingUp } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const attendanceData = [
  { day: 1, present: true },
  { day: 2, present: true },
  { day: 3, present: false },
  { day: 4, present: true },
  { day: 5, present: true },
  { day: 6, present: true },
  { day: 7, present: false },
  { day: 8, present: true },
  { day: 9, present: true },
  { day: 10, present: true },
  { day: 11, present: true },
  { day: 12, present: true },
  { day: 13, present: false },
  { day: 14, present: true },
  { day: 15, present: true },
  { day: 16, present: true },
  { day: 17, present: true },
  { day: 18, present: false },
  { day: 19, present: true },
  { day: 20, present: true },
  { day: 21, present: true },
  { day: 22, present: true },
  { day: 23, present: true },
  { day: 24, present: false },
  { day: 25, present: true },
  { day: 26, present: true },
  { day: 27, present: true },
  { day: 28, present: true },
  { day: 29, present: true },
  { day: 30, present: true },
]

const monthlyData = months.map(month => ({
  month: month.substring(0, 3),
  present: Math.floor(Math.random() * 23) + 18,
  absent: Math.floor(Math.random() * 5) + 1,
  leave: Math.floor(Math.random() * 3),
}))

export default function DailyAttendance() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const isHoliday = (day) => {
    // Sample holidays
    return day === 15 || day === 20
  }

  const daysInMonth = getDaysInMonth(selectedMonth, selectedYear)
  const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  return (
    <div className="space-y-6">
      {/* Month Selector */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-800">Select Month & Year</h3>
        </div>
        <div className="flex space-x-4">
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(Number(e.target.value))}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {months.map((month, index) => (
              <option key={index} value={index}>{month}</option>
            ))}
          </select>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {[2023, 2024, 2025].map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Monthly Bar Chart */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center space-x-4 mb-6">
          <TrendingUp className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-bold text-gray-800">Monthly Attendance Overview</h3>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="present" fill="#10b981" name="Present" />
            <Bar dataKey="absent" fill="#ef4444" name="Absent" />
            <Bar dataKey="leave" fill="#f59e0b" name="Leave" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Calendar View */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center space-x-4 mb-6">
          <Calendar className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-bold text-gray-800">
            {months[selectedMonth]} {selectedYear} - Attendance Calendar
          </h3>
        </div>
        
        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2 mb-4">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center font-semibold text-gray-700 py-2">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: new Date(selectedYear, selectedMonth, 1).getDay() }, (_, i) => (
            <div key={`empty-${i}`} className="p-2"></div>
          ))}
          {calendarDays.map(day => {
            const isPresent = attendanceData.find(d => d.day === day)?.present ?? false
            const isHolidayDay = isHoliday(day)
            
            return (
              <div
                key={day}
                className={`p-3 rounded-lg border-2 text-center ${
                  isHolidayDay
                    ? 'bg-purple-100 border-purple-300 text-purple-800'
                    : isPresent
                    ? 'bg-green-100 border-green-300 text-green-800'
                    : 'bg-red-100 border-red-300 text-red-800'
                }`}
              >
                <div className="font-bold">{day}</div>
                <div className="text-xs mt-1">
                  {isHolidayDay ? 'Holiday' : isPresent ? 'Present' : 'Absent'}
                </div>
              </div>
            )
          })}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-100 border-2 border-green-300 rounded"></div>
            <span className="text-sm text-gray-700">Present</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-100 border-2 border-red-300 rounded"></div>
            <span className="text-sm text-gray-700">Absent</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-purple-100 border-2 border-purple-300 rounded"></div>
            <span className="text-sm text-gray-700">Holiday</span>
          </div>
        </div>
      </div>
    </div>
  )
}

