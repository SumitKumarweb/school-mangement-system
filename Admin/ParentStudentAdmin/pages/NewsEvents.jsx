import { Bell, Calendar, MapPin, Image, Eye } from 'lucide-react'

const newsAndEvents = [
  {
    id: 1,
    title: 'Annual Sports Day',
    description: 'Join us for the Annual Sports Day celebration featuring various athletic events, competitions, and prizes.',
    date: '2024-03-25',
    location: 'School Ground',
    image: 'https://via.placeholder.com/400x250?text=Sports+Day',
    type: 'event',
    category: 'Sports',
    featured: true,
  },
  {
    id: 2,
    title: 'Parent-Teacher Meeting',
    description: 'Monthly Parent-Teacher Meeting scheduled to discuss student progress and academic performance.',
    date: '2024-03-20',
    location: 'School Auditorium',
    image: 'https://via.placeholder.com/400x250?text=PTM',
    type: 'event',
    category: 'Academic',
    featured: true,
  },
  {
    id: 3,
    title: 'Science Fair Exhibition',
    description: 'Students showcase their innovative science projects and experiments in this annual science fair.',
    date: '2024-03-28',
    location: 'Science Lab Block',
    image: 'https://via.placeholder.com/400x250?text=Science+Fair',
    type: 'event',
    category: 'Academic',
    featured: false,
  },
  {
    id: 4,
    title: 'New Library Books Arrived',
    description: 'We are excited to announce that a new collection of books has been added to the school library.',
    date: '2024-03-15',
    location: 'School Library',
    image: 'https://via.placeholder.com/400x250?text=Library+Books',
    type: 'news',
    category: 'General',
    featured: false,
  },
  {
    id: 5,
    title: 'Annual Day Celebration',
    description: 'Mark your calendars! The grand Annual Day celebration with cultural programs, awards, and more.',
    date: '2024-04-15',
    location: 'School Auditorium',
    image: 'https://via.placeholder.com/400x250?text=Annual+Day',
    type: 'event',
    category: 'Cultural',
    featured: true,
  },
  {
    id: 6,
    title: 'Health Checkup Camp',
    description: 'Free health checkup camp for all students organized by the school in collaboration with local hospital.',
    date: '2024-03-22',
    location: 'School Medical Room',
    image: 'https://via.placeholder.com/400x250?text=Health+Camp',
    type: 'event',
    category: 'Health',
    featured: false,
  },
]

const categoryColors = {
  Sports: 'bg-blue-100 text-blue-800',
  Academic: 'bg-green-100 text-green-800',
  Cultural: 'bg-purple-100 text-purple-800',
  Health: 'bg-red-100 text-red-800',
  General: 'bg-gray-100 text-gray-800',
}

export default function NewsEvents() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl p-6 text-white">
        <div className="flex items-center space-x-4">
          <Bell className="w-8 h-8" />
          <div>
            <h2 className="text-2xl font-bold">News & Events</h2>
            <p className="text-purple-100 mt-1">Stay updated with school news and upcoming events</p>
          </div>
        </div>
      </div>

      {/* Featured Events */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Featured Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsAndEvents
            .filter(item => item.featured)
            .map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[item.category]}`}>
                      {item.category}
                    </span>
                  </div>
                  {item.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-yellow-500 text-white rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    {item.type === 'event' ? (
                      <Calendar className="w-4 h-4 text-blue-600" />
                    ) : (
                      <Bell className="w-4 h-4 text-purple-600" />
                    )}
                    <span className="text-xs font-semibold text-gray-500 uppercase">{item.type}</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                    <Eye className="w-4 h-4" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* All News & Events */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">All News & Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsAndEvents.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[item.category]}`}>
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  {item.type === 'event' ? (
                    <Calendar className="w-4 h-4 text-blue-600" />
                  ) : (
                    <Bell className="w-4 h-4 text-purple-600" />
                  )}
                  <span className="text-xs font-semibold text-gray-500 uppercase">{item.type}</span>
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.description}</p>
                <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                </div>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>View Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

