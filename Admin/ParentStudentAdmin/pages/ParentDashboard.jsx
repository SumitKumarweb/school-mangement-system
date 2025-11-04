import { useState } from 'react'
import { User, Truck, Users, Heart, Target, Award, Camera } from 'lucide-react'

const tabs = [
  { id: 'primary', label: 'Primary Details', icon: User },
  { id: 'transport', label: 'Transport Details', icon: Truck },
  { id: 'father', label: 'Father Details', icon: Users },
  { id: 'mother', label: 'Mother Details', icon: Users },
  { id: 'guardian', label: 'Guardian Details', icon: Users },
  { id: 'health', label: 'Health Details', icon: Heart },
  { id: 'self-awareness', label: 'Self-awareness', icon: Target },
]

export default function ParentDashboard() {
  const [activeTab, setActiveTab] = useState('primary')

  const renderContent = () => {
    switch (activeTab) {
      case 'primary':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-4">Primary Details</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-sm text-gray-600 mb-1">Full Name</p>
                <p className="text-lg font-semibold text-gray-800">John Doe</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-sm text-gray-600 mb-1">Admission Number</p>
                <p className="text-lg font-semibold text-gray-800">2024001</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-sm text-gray-600 mb-1">Date of Birth</p>
                <p className="text-lg font-semibold text-gray-800">15/05/2008</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-sm text-gray-600 mb-1">Gender</p>
                <p className="text-lg font-semibold text-gray-800">Male</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-sm text-gray-600 mb-1">Class</p>
                <p className="text-lg font-semibold text-gray-800">10th A</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-sm text-gray-600 mb-1">Academic Year</p>
                <p className="text-lg font-semibold text-gray-800">2024-2025</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 md:col-span-2">
                <p className="text-sm text-gray-600 mb-1">Address</p>
                <p className="text-lg font-semibold text-gray-800">123 Main Street, City, State, 12345</p>
              </div>
            </div>
          </div>
        )
      case 'transport':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-4">Transport Details</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-sm text-gray-600 mb-1">Route Number</p>
                <p className="text-lg font-semibold text-gray-800">RT-05</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-sm text-gray-600 mb-1">Vehicle Number</p>
                <p className="text-lg font-semibold text-gray-800">ABC-1234</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-sm text-gray-600 mb-1">Driver Name</p>
                <p className="text-lg font-semibold text-gray-800">Rajesh Kumar</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-sm text-gray-600 mb-1">Driver Contact</p>
                <p className="text-lg font-semibold text-gray-800">+91 98765 43210</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 md:col-span-2">
                <p className="text-sm text-gray-600 mb-1">Pickup Point</p>
                <p className="text-lg font-semibold text-gray-800">Main Road, Sector 5</p>
              </div>
            </div>
          </div>
        )
      case 'father':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-4">Father Details</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-sm text-gray-600 mb-1">Name</p>
                <p className="text-lg font-semibold text-gray-800">Robert Doe</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-sm text-gray-600 mb-1">Occupation</p>
                <p className="text-lg font-semibold text-gray-800">Engineer</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-sm text-gray-600 mb-1">Mobile Number</p>
                <p className="text-lg font-semibold text-gray-800">+91 98765 43210</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-sm text-gray-600 mb-1">Email</p>
                <p className="text-lg font-semibold text-gray-800">robert.doe@email.com</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 md:col-span-2">
                <p className="text-sm text-gray-600 mb-1">Address</p>
                <p className="text-lg font-semibold text-gray-800">123 Main Street, City, State, 12345</p>
              </div>
            </div>
          </div>
        )
      case 'mother':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-4">Mother Details</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-sm text-gray-600 mb-1">Name</p>
                <p className="text-lg font-semibold text-gray-800">Sarah Doe</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-sm text-gray-600 mb-1">Occupation</p>
                <p className="text-lg font-semibold text-gray-800">Teacher</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-sm text-gray-600 mb-1">Mobile Number</p>
                <p className="text-lg font-semibold text-gray-800">+91 98765 43211</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-sm text-gray-600 mb-1">Email</p>
                <p className="text-lg font-semibold text-gray-800">sarah.doe@email.com</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 md:col-span-2">
                <p className="text-sm text-gray-600 mb-1">Address</p>
                <p className="text-lg font-semibold text-gray-800">123 Main Street, City, State, 12345</p>
              </div>
            </div>
          </div>
        )
      case 'guardian':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-4">Guardian Details</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-sm text-gray-600 mb-1">Name</p>
                <p className="text-lg font-semibold text-gray-800">Michael Smith</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-sm text-gray-600 mb-1">Relation</p>
                <p className="text-lg font-semibold text-gray-800">Uncle</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-sm text-gray-600 mb-1">Mobile Number</p>
                <p className="text-lg font-semibold text-gray-800">+91 98765 43212</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-sm text-gray-600 mb-1">Email</p>
                <p className="text-lg font-semibold text-gray-800">michael.smith@email.com</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 md:col-span-2">
                <p className="text-sm text-gray-600 mb-1">Address</p>
                <p className="text-lg font-semibold text-gray-800">456 Oak Avenue, City, State, 12345</p>
              </div>
            </div>
          </div>
        )
      case 'health':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-4">Health Details</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-sm text-gray-600 mb-1">Blood Group</p>
                <p className="text-lg font-semibold text-gray-800">O+</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-sm text-gray-600 mb-1">Allergies</p>
                <p className="text-lg font-semibold text-gray-800">None</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-sm text-gray-600 mb-1">Medical Conditions</p>
                <p className="text-lg font-semibold text-gray-800">None</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-sm text-gray-600 mb-1">Emergency Contact</p>
                <p className="text-lg font-semibold text-gray-800">+91 98765 43210</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 md:col-span-2">
                <p className="text-sm text-gray-600 mb-1">Medications</p>
                <p className="text-lg font-semibold text-gray-800">None</p>
              </div>
            </div>
          </div>
        )
      case 'self-awareness':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-4">Self-awareness</h3>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Target className="w-6 h-6 text-blue-600" />
                <h4 className="text-xl font-bold text-gray-800">My Goals</h4>
              </div>
              <ul className="space-y-3">
                {[
                  'Achieve 90%+ marks in all subjects',
                  'Participate in at least 3 extracurricular activities',
                  'Improve presentation skills',
                  'Develop leadership qualities',
                ].map((goal, index) => (
                  <li key={index} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                    <span className="text-blue-600 font-bold">{index + 1}.</span>
                    <span className="text-gray-700">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="w-6 h-6 text-green-600" />
                <h4 className="text-xl font-bold text-gray-800">My Strengths</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Mathematics', 'Problem Solving', 'Communication', 'Teamwork', 'Creativity'].map((strength, index) => (
                  <span key={index} className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-medium">
                    {strength}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Camera className="w-6 h-6 text-purple-600" />
                <h4 className="text-xl font-bold text-gray-800">My Interests and Hobbies</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Reading', 'Sports', 'Music', 'Drawing', 'Programming', 'Photography'].map((interest, index) => (
                  <span key={index} className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-medium">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="w-6 h-6 text-yellow-600" />
                <h4 className="text-xl font-bold text-gray-800">Responsibilities and Achievements</h4>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="font-semibold text-gray-800">Class Monitor</p>
                  <p className="text-sm text-gray-600 mt-1">Responsible for maintaining discipline in class</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="font-semibold text-gray-800">Winner - Science Fair 2024</p>
                  <p className="text-sm text-gray-600 mt-1">First prize in regional science fair competition</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="font-semibold text-gray-800">Best Student Award</p>
                  <p className="text-sm text-gray-600 mt-1">Awarded for excellent academic performance</p>
                </div>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-md p-4 overflow-x-auto">
        <div className="flex space-x-2 min-w-max">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{tab.label}</span>
              </button>
            )
          })}
        </div>
      </div>
      {renderContent()}
    </div>
  )
}

