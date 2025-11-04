import { useState } from 'react'
import { Images, X, Download, Eye } from 'lucide-react'

const galleryCategories = ['All', 'Sports', 'Events', 'Academic', 'Cultural', 'School Life']

const galleryImages = [
  {
    id: 1,
    title: 'Annual Sports Day',
    category: 'Sports',
    image: 'https://via.placeholder.com/600x400?text=Sports+Day+1',
    date: '2024-03-15',
  },
  {
    id: 2,
    title: 'Science Fair Exhibition',
    category: 'Academic',
    image: 'https://via.placeholder.com/600x400?text=Science+Fair',
    date: '2024-03-10',
  },
  {
    id: 3,
    title: 'Annual Day Celebration',
    category: 'Cultural',
    image: 'https://via.placeholder.com/600x400?text=Annual+Day',
    date: '2024-02-20',
  },
  {
    id: 4,
    title: 'Basketball Tournament',
    category: 'Sports',
    image: 'https://via.placeholder.com/600x400?text=Basketball',
    date: '2024-02-15',
  },
  {
    id: 5,
    title: 'Library Reading Session',
    category: 'Academic',
    image: 'https://via.placeholder.com/600x400?text=Library',
    date: '2024-02-10',
  },
  {
    id: 6,
    title: 'Dance Performance',
    category: 'Cultural',
    image: 'https://via.placeholder.com/600x400?text=Dance',
    date: '2024-02-05',
  },
  {
    id: 7,
    title: 'PTM Meeting',
    category: 'Events',
    image: 'https://via.placeholder.com/600x400?text=PTM',
    date: '2024-01-25',
  },
  {
    id: 8,
    title: 'Football Match',
    category: 'Sports',
    image: 'https://via.placeholder.com/600x400?text=Football',
    date: '2024-01-20',
  },
  {
    id: 9,
    title: 'Art Exhibition',
    category: 'Cultural',
    image: 'https://via.placeholder.com/600x400?text=Art+Exhibition',
    date: '2024-01-15',
  },
  {
    id: 10,
    title: 'School Assembly',
    category: 'School Life',
    image: 'https://via.placeholder.com/600x400?text=Assembly',
    date: '2024-01-10',
  },
  {
    id: 11,
    title: 'Laboratory Session',
    category: 'Academic',
    image: 'https://via.placeholder.com/600x400?text=Lab+Session',
    date: '2024-01-05',
  },
  {
    id: 12,
    title: 'Music Concert',
    category: 'Cultural',
    image: 'https://via.placeholder.com/600x400?text=Music+Concert',
    date: '2023-12-20',
  },
]

const categoryColors = {
  Sports: 'bg-blue-100 text-blue-800',
  Academic: 'bg-green-100 text-green-800',
  Cultural: 'bg-purple-100 text-purple-800',
  Events: 'bg-orange-100 text-orange-800',
  'School Life': 'bg-pink-100 text-pink-800',
}

export default function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory)

  const handleImageClick = (image) => {
    setSelectedImage(image)
  }

  const handleDownload = (image) => {
    alert(`Downloading ${image.title}`)
    // In real app, this would download the image
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl p-6 text-white">
        <div className="flex items-center space-x-4">
          <Images className="w-8 h-8" />
          <div>
            <h2 className="text-2xl font-bold">Photo Gallery</h2>
            <p className="text-pink-100 mt-1">Capture memories from school events and activities</p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Filter by Category</h3>
        <div className="flex flex-wrap gap-3">
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
            onClick={() => handleImageClick(image)}
          >
            <div className="relative overflow-hidden">
              <img
                src={image.image}
                alt={image.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute top-4 right-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    categoryColors[image.category]
                  }`}
                >
                  {image.category}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-bold text-gray-800 mb-1">{image.title}</h4>
              <p className="text-xs text-gray-500">{image.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredImages.length === 0 && (
        <div className="bg-white rounded-xl shadow-md p-12 text-center">
          <Images className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-lg text-gray-600">No images found in this category</p>
        </div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="sticky top-0 bg-white p-4 border-b border-gray-200 flex items-center justify-between z-10">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{selectedImage.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{selectedImage.date}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleDownload(selectedImage)
                  }}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Download"
                >
                  <Download className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Close"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="mt-4 flex items-center space-x-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    categoryColors[selectedImage.category]
                  }`}
                >
                  {selectedImage.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

