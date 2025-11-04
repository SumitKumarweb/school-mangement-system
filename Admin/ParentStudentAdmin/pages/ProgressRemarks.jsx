import { TrendingUp, Award, FileText, BarChart3 } from 'lucide-react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const testResults = [
  { test: 'Monthly Test 1', marks: 85, total: 100, percentage: 85 },
  { test: 'Monthly Test 2', marks: 90, total: 100, percentage: 90 },
  { test: 'Mid-term', marks: 385, total: 500, percentage: 77 },
  { test: 'Monthly Test 3', marks: 88, total: 100, percentage: 88 },
  { test: 'Pre-final', marks: 420, total: 500, percentage: 84 },
  { test: 'Final Exam', marks: 450, total: 500, percentage: 90 },
]

const subjectWiseResults = [
  { subject: 'Mathematics', marks: 92, total: 100 },
  { subject: 'Science', marks: 88, total: 100 },
  { subject: 'English', marks: 85, total: 100 },
  { subject: 'History', marks: 90, total: 100 },
  { subject: 'Geography', marks: 87, total: 100 },
  { subject: 'Computer Science', marks: 95, total: 100 },
]

const monthlyPerformance = [
  { month: 'Jan', performance: 82 },
  { month: 'Feb', performance: 85 },
  { month: 'Mar', performance: 88 },
  { month: 'Apr', performance: 86 },
  { month: 'May', performance: 90 },
  { month: 'Jun', performance: 92 },
]

const performanceDistribution = [
  { name: 'Excellent (90-100)', value: 35, color: '#10b981' },
  { name: 'Good (80-89)', value: 45, color: '#3b82f6' },
  { name: 'Average (70-79)', value: 15, color: '#f59e0b' },
  { name: 'Needs Improvement (<70)', value: 5, color: '#ef4444' },
]

const remarks = [
  {
    id: 1,
    date: '2024-03-15',
    teacher: 'Mr. Smith - Mathematics',
    remark: 'Excellent performance in Mathematics. Keep up the good work!',
    type: 'positive',
  },
  {
    id: 2,
    date: '2024-03-10',
    teacher: 'Mrs. Johnson - Science',
    remark: 'Good understanding of concepts. Try to improve in practical experiments.',
    type: 'neutral',
  },
  {
    id: 3,
    date: '2024-03-05',
    teacher: 'Ms. Williams - English',
    remark: 'Outstanding progress in English literature. Well done!',
    type: 'positive',
  },
  {
    id: 4,
    date: '2024-02-28',
    teacher: 'Mr. Brown - History',
    remark: 'Improving consistently. Continue working hard.',
    type: 'positive',
  },
]

export default function ProgressRemarks() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-xl p-6 text-white">
        <div className="flex items-center space-x-4">
          <TrendingUp className="w-8 h-8" />
          <div>
            <h2 className="text-2xl font-bold">Progress & Remarks</h2>
            <p className="text-green-100 mt-1">Track your academic performance</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
          <p className="text-sm text-gray-600 mb-1">Current Average</p>
          <p className="text-3xl font-bold text-gray-800">88.5%</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
          <p className="text-sm text-gray-600 mb-1">Best Subject</p>
          <p className="text-2xl font-bold text-gray-800">Computer Science</p>
          <p className="text-sm text-gray-500 mt-1">95%</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-yellow-500">
          <p className="text-sm text-gray-600 mb-1">Overall Rank</p>
          <p className="text-3xl font-bold text-gray-800">#5</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
          <p className="text-sm text-gray-600 mb-1">Total Tests</p>
          <p className="text-3xl font-bold text-gray-800">6</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Performance Chart */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center space-x-4 mb-6">
            <BarChart3 className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-bold text-gray-800">Monthly Performance</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[70, 100]} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="performance" stroke="#3b82f6" strokeWidth={2} name="Performance %" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Performance Distribution */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center space-x-4 mb-6">
            <Award className="w-6 h-6 text-green-600" />
            <h3 className="text-xl font-bold text-gray-800">Performance Distribution</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={performanceDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {performanceDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Test Results */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center space-x-4 mb-6">
            <FileText className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-bold text-gray-800">Test Results</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={testResults}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="test" angle={-45} textAnchor="end" height={80} />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Bar dataKey="percentage" fill="#3b82f6" name="Percentage %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Subject-wise Results */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center space-x-4 mb-6">
            <Award className="w-6 h-6 text-purple-600" />
            <h3 className="text-xl font-bold text-gray-800">Subject-wise Performance</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={subjectWiseResults} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="subject" type="category" width={100} />
              <Tooltip />
              <Legend />
              <Bar dataKey="marks" fill="#8b5cf6" name="Marks" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Remarks Section */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center space-x-4 mb-6">
          <FileText className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-bold text-gray-800">Teacher Remarks</h3>
        </div>
        <div className="space-y-4">
          {remarks.map((remark) => (
            <div
              key={remark.id}
              className={`p-4 rounded-lg border-l-4 ${
                remark.type === 'positive'
                  ? 'bg-green-50 border-green-400'
                  : remark.type === 'neutral'
                  ? 'bg-blue-50 border-blue-400'
                  : 'bg-yellow-50 border-yellow-400'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <p className="font-semibold text-gray-800">{remark.teacher}</p>
                <span className="text-xs text-gray-500">{remark.date}</span>
              </div>
              <p className="text-gray-700">{remark.remark}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Test Results Table */}
      <div className="bg-white rounded-xl shadow-md p-6 overflow-x-auto">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Detailed Test Results</h3>
        <table className="w-full min-w-[600px]">
          <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <tr>
              <th className="px-4 py-3 text-left">Test Name</th>
              <th className="px-4 py-3 text-center">Marks Obtained</th>
              <th className="px-4 py-3 text-center">Total Marks</th>
              <th className="px-4 py-3 text-center">Percentage</th>
              <th className="px-4 py-3 text-center">Grade</th>
            </tr>
          </thead>
          <tbody>
            {testResults.map((result, index) => {
              const grade = result.percentage >= 90 ? 'A+' : result.percentage >= 80 ? 'A' : result.percentage >= 70 ? 'B' : result.percentage >= 60 ? 'C' : 'D'
              return (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">{result.test}</td>
                  <td className="px-4 py-3 text-center text-gray-700">{result.marks}</td>
                  <td className="px-4 py-3 text-center text-gray-700">{result.total}</td>
                  <td className="px-4 py-3 text-center font-semibold text-gray-800">{result.percentage}%</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      grade === 'A+' ? 'bg-green-100 text-green-800' :
                      grade === 'A' ? 'bg-blue-100 text-blue-800' :
                      grade === 'B' ? 'bg-yellow-100 text-yellow-800' :
                      grade === 'C' ? 'bg-orange-100 text-orange-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {grade}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

