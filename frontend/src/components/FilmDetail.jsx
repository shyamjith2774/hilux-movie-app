
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { MovieContext } from '../context/MovieContext'
import { Play, Share2, Info } from 'lucide-react'

const FilmDetail = () => {
  const { filmId } = useParams()
  const { Movie } = useContext(MovieContext)
  const moviedetails = Movie.find(item => item.id == filmId)

  if (!moviedetails) {
    return <div className="bg-gray-900 text-white h-screen flex items-center justify-center">Movie not found</div>
  }

  return (
    <div 
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(45, 85, 100, 0.85) 0%, rgba(20, 40, 50, 0.9) 100%), url('https://image.tmdb.org/t/p/w1280${moviedetails?.backdrop_path}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-transparent to-transparent" />
      
      <div className="relative z-10 h-full flex items-end pb-16 px-8 md:px-16">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          
          {/* Poster Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <img
                src={`https://image.tmdb.org/t/p/w500${moviedetails?.poster_path}`}
                alt={moviedetails?.title}
                className="w-48 h-72 rounded-lg shadow-2xl object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-blue-600 rounded-full p-4 shadow-lg cursor-pointer hover:bg-blue-700 transition">
                <Play className="w-6 h-6 text-white fill-white" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{moviedetails?.title}</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 bg-yellow-400 bg-opacity-20 px-4 py-2 rounded-full">
                  <span className="text-gray-700 font-semibold text-lg">★ {moviedetails?.vote_average.toFixed(1)}</span>
                </div>
                <span className="text-gray-300 text-sm">Rating</span>
              </div>

              <p className="text-gray-200 text-base leading-relaxed max-w-2xl">
                {moviedetails?.overview}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded transition flex items-center gap-2">
                <Play className="w-5 h-5 fill-white" />
                PLAY NOW
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold px-8 py-3 rounded transition">
                TRAILER
              </button>
              <button className="bg-transparent hover:bg-white/10 text-white p-3 rounded transition">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="bg-transparent hover:bg-white/10 text-white p-3 rounded transition">
                <Info className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilmDetail
