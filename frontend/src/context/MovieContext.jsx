import { createContext, useEffect, useState } from "react";


export const MovieContext = createContext()


const MovieContextProvider = (props) => {

    const [Movie, setMovie] = useState([])

    const Moviefetch = async () => {
        try {
            const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=cf94880b8b0e7d4688b67ecce19f4536")

            const data = await res.json();

            setMovie(data.results)


        }
        catch (error) {
            console.log("error:", error.message);
        }

    }

    useEffect(() => {
        Moviefetch()

    }, [])


    const contextvalues = {

        Movie

    }

    return (

        <MovieContext.Provider value={contextvalues}>

            {props.children}

        </MovieContext.Provider>

    )


}

export default MovieContextProvider

