import { useEffect } from 'react'
import { UseGet } from '../api/hooks/UseGet'
import { Movies } from '../interfaces/AllMovies'
import { Link } from 'react-router-dom';
import { Header } from './Header';
export const ListMovies = () => {
  const {movies,getAllMovies,getOneGiftByTitle,giftData} = UseGet()
  useEffect(() => {
    getAllMovies()
  },[])
  
  const renderMovie = (movie:Movies)=>{
    return (
      <div 
      key={movie.id.toString()}
      className= 'm-1.5 bg-red-200 flex flex-col basis-1/6'
      >
        <div className='h-56 m-1.5 bg-green-200'>
          <img src="" alt="" />
        </div>
        <div className='h-1/5 m-1.5 bg-fuchsia-700 text-center flex items-center justify-center text-white'>
          <Link to={`/movies/detail/${movie.id}`}>{movie.title}</Link>
        </div>
      </div>
    )
  }
  return (
    <>
      <Header/>
        <h1 className='text-center'>Nuestro listado de peliculas</h1>
        <div className='flex flex-row flex-wrap justify-evenly'>
          {movies.map(movie=>renderMovie(movie))}
        </div>
        
    </>
  )
}
