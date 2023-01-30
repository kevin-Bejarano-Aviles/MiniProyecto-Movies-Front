import { useEffect } from 'react';
import { UseGet } from '../api/hooks/UseGet'
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { GiftGrid } from '../components/GiftGrid';
import { Movie } from '../interfaces/Movies';
export const ListMovies = () => {
  const {movies,getAllMovies} = UseGet()
  useEffect(() => {
    getAllMovies()
  },[])
  
  const renderMovie = (movie:Movie)=>{
    let title:string
    if(movie.title.length>17){
      title = movie.title.substring(0,14)
    }else{
      title = movie.title.substring(0,17)
    }
    return (
      <div 
      key={movie.id.toString()}
      className= 'm-2.5 bg-orange-500 flex flex-col basis-1/6 border rounded-lg'
      >
      <Link
      to={`/movies/detail/${movie.id}`}
      className ='flex flex-col h-full'
      >
        <div className=' basis-3/4'>
            <GiftGrid
          key={movie.id}
          titulo = {title}//porque si no pongo el substring se rompe la peticion
        />
      </div>
      <div className='bg-blue-800 text-center flex items-center justify-center text-white basis-1/4 m-1.5 border rounded-lg'>
          <p className='text-center'>{movie.title}</p>
      </div>
      </Link>
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
