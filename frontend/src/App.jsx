import React from 'react'
import { Routes, Route } from "react-router-dom";
import DisplayHome from './components/DisplayHome';
import FilmDetail from './components/FilmDetail';

const App = () => {
  return (
    <div >
      
    <Routes>
     <Route path='/' element={<DisplayHome/>}/>
          <Route path='/filmdetail/:filmId' element={<FilmDetail/>}/>

    </Routes>
    
    
    
    </div>
  )
}

export default App