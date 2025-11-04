import { useState } from 'react'
import { BookOpen, FileText, Image, Calendar, Download, Eye } from 'lucide-react'

const subjects = ['Mathematics', 'Science', 'English', 'History', 'Geography', 'Computer Science']

const homeworkData = {
  'Mathematics': [
    {
      id: 1,
      title: 'Chapter 5 - Algebra Exercises',
      description: 'Complete exercises 5.1 to 5.5 from the textbook',
      assignedDate: '2024-03-10',
      submissionDate: '2024-03-15',
      attachments: [{ type: 'pdf', name: 'Math_Exercises.pdf', url: '#' }],
    },
    {
      id: 2,
      title: 'Practice Problems Set 3',
      description: 'Solve all problems from page 45-50',
      assignedDate: '2024-03-12',
      submissionDate: '2024-03-17',
      attachments: [{ type: 'image', name: 'Problem_Set.jpg', url: '#' }],
    },
  ],
  'Science': [
    {
      id: 3,
      title: 'Lab Report - Experiment 3',
      description: 'Write a detailed lab report for the photosynthesis experiment',
      assignedDate: '2024-03-11',
      submissionDate: '2024-03-18',
      attachments: [
        { type: 'pdf', name: 'Lab_Instructions.pdf', url: '#' },
        { type: 'image', name: 'Experiment_Diagram.jpg', url: '#' },
      ],
    },
  ],
  'English': [
    {
      id: 4,
      title: 'Essay Writing - Climate Change',
      description: 'Write a 500-word essay on climate change and its impact',
      assignedDate: '2024-03-13',
      submissionDate: '2024-03-20',
      attachments: [{ type: 'pdf', name: 'Essay_Guidelines.pdf', url: '#' }],
    },
  ],
}

export default function Homework() {
  const [selectedSubject, setSelectedSubject] = useState(subjects[0])
  const [previewItem, setPreviewItem] = useState(null)

  const currentHomework = homeworkData[selectedSubject] || []

  const handlePreview = (attachment) => {
    setPreviewItem(attachment)
  }

  const handleDownload = (attachment) => {
    // In real app, this would download the file
    alert(`Downloading ${attachment.name}`)
  }

  return (
    <div className="space-y-6">
      {/* Subject Selector */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center space-x-4 mb-6">
          <BookOpen className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-bold text-gray-800">Select Subject</h3>
        </div>
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {subjects.map(subject => (
            <option key={subject} value={subject}>{subject}</option>
          ))}
        </select>
      </div>

      {/* Homework List */}
      <div className="space-y-4">
        {currentHomework.length > 0 ? (
          currentHomework.map((hw) => (
            <div key={hw.id} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{hw.title}</h4>
                  <p className="text-gray-600 mb-4">{hw.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>Assigned: {hw.assignedDate}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>Due: {hw.submissionDate}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Attachments */}
              {hw.attachments && hw.attachments.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Attachments:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {hw.attachments.map((attachment, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
                      >
                        <div className="flex items-center space-x-3">
                          {attachment.type === 'pdf' ? (
                            <FileText className="w-5 h-5 text-red-600" />
                          ) : (
                            <Image className="w-5 h-5 text-blue-600" />
                          )}
                          <span className="text-sm font-medium text-gray-700">{attachment.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handlePreview(attachment)}
                            className="p-2 hover:bg-blue-100 rounded-lg transition-colors"
                            title="Preview"
                          >
                            <Eye className="w-4 h-4 text-blue-600" />
                          </button>
                          <button
                            onClick={() => handleDownload(attachment)}
                            className="p-2 hover:bg-green-100 rounded-lg transition-colors"
                            title="Download"
                          >
                            <Download className="w-4 h-4 text-green-600" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {!hw.attachments || hw.attachments.length === 0 && (
                <p className="text-sm text-gray-500 mt-4">No attachments available</p>
              )}
            </div>
          ))
        ) : (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-lg text-gray-600">No homework assigned for {selectedSubject}</p>
          </div>
        )}
      </div>

      {/* Preview Modal */}
      {previewItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-800">{previewItem.name}</h3>
              <button
                onClick={() => setPreviewItem(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              {previewItem.type === 'image' ? (
                <img
                  src="https://via.placeholder.com/800x600?text=Homework+Preview"
                  alt={previewItem.name}
                  className="w-full rounded-lg"
                />
              ) : (
                <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">PDF Preview</p>
                    <p className="text-sm text-gray-500 mt-2">{previewItem.name}</p>
                    <button
                      onClick={() => handleDownload(previewItem)}
                      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Download PDF
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

