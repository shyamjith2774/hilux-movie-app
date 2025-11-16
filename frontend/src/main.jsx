import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MovieContextProvider from './context/MovieContext.jsx'
import {BrowserRouter} from 'react-router-dom'


createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <MovieContextProvider>
     <App />
  </MovieContextProvider>
  </BrowserRouter>
   
 
)
