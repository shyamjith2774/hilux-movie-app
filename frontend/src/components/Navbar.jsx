import React, { useContext, useState } from 'react'



const Navbar = () => {
 
  const{search,setsearch}=useState(false)
  return (
    <div className='flex items-center justify-between py-3 md:py-3 px-4 md:px-7 bg-[#142832]'>
        
        <div >
       <p className='text-[30px] text-white transition duration-300 ease-in-out hover:scale-120 hover:text-white'>Hilux Movies</p>
        </div>


          {/* right side section of navbar  */}
          
          
          <div className='flex items-center gap-5 px-10'>
           
           {/* <input type="text"  placeholder='search for movies' className='bg-white pl-15 py-1 m-auto rounded-2xl font-semibold text-[15px] border-none ' /> */}
            <h1 className='font-bold text-white text-[20px] hover:text-blue-800 transition duration-500'>POPULAR</h1>
            <h1  className='font-bold text-white text-[20px] hover:text-blue-800 transition duration-500'>TOP RATED</h1>
            <h1  className='font-bold text-white text-[20px] hover:text-blue-800 transition duration-500'>LATEST</h1>
            
              

          </div>
       
    </div>
  )
}

export default Navbar