import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { MovieContext } from '../context/MovieContext'

const FilmDetail = () => {

  const {filmId}=useParams()
  
const { Movie } = useContext(MovieContext)

  const moviedetails=Movie.find(item => item.id == filmId);
 
  
  return (
     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">

          
                    <div  className="bg-white p-2 rounded space-y-4">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${moviedetails?.poster_path}`}
                            alt={moviedetails?.title}
                            className="w-full h-100 rounded"
                        />
                        <p className="font-semibold">{moviedetails?.title}</p>
                        <p>{moviedetails?.vote_average}</p>
                        <p>{moviedetails?.overview}</p>
                    </div>
               

            </div>
  )
}

export default FilmDetail