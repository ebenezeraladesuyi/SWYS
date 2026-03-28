// import React from 'react'
import session1 from "../../assets/swys2026/session-1.jpg"
import session2 from "../../assets/swys2026/session-2.jpg"

const Panel = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Our Panelists
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Image 1 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-3xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <img 
              src={session1} 
              alt="Panelist 1" 
              className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <p className="text-gray-800 font-medium text-center">Session 1 Panel</p>
              </div>
            </div>
          </div>

          {/* Image 2 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-3xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <img 
              src={session2} 
              alt="Panelist 2" 
              className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <p className="text-gray-800 font-medium text-center">Session 2 Panel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Panel