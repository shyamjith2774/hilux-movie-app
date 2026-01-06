import React, { useContext, useState } from 'react'
import { MovieContext } from '../context/MovieContext'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Snowfall from 'react-snowfall'


const DisplayHome = () => {

    const { Movie } = useContext(MovieContext)
    
    

    return (
        <div className=' bg-gradient-to-r from-[#2D5564] via-[#1a3a47] to-[#142832] '>
            <Snowfall color="#82C3D9"/>

            <Navbar />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 px-5 pb-5 gap-4 mt-4 ">

                {Movie?.map((items) => (
                    <Link to={`/filmdetail/${items.id}`} key={items.id} className="bg-white p-2 rounded space-y-4 overflow-hidden">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${items.poster_path}`}
                            alt={items.title}
                            className="w-full h-100 rounded transition duration-300 ease-in-out hover:scale-110"
                        />
                      
                    </Link>
                ))}

            </div>



        </div>
    )
}

export default DisplayHome