import { UseGet } from '../api/hooks/UseGet';
import { useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import { Header } from './Header';
export const GenreDetail = () => {
    const {getGenreById,oneGenre} = UseGet()
    const params = useParams()
    const id = params.id
    useEffect(() => {
      getGenreById(id)
    }, [])
    
    return (
        <>
            <Header/>
            <h1 className='text-center'>Detalle del genero {oneGenre?.name}</h1>
            <div className='flex flex-col w-1/2 border border-stone-800 rounded-2xl'>
                <div>
                    <p>Nombre del genero:{oneGenre?.name}</p>
                    <p>Ranking:{oneGenre?.ranking}</p>        
                </div>
                <div>
                    <p>Peliculas:</p>
                {
                    oneGenre?.movies?.map(movie =>
                        <ul key={movie.id.toString()}>
                            <Link to={`/movies/detail/${movie.id}`}>
                                <li className='text-blue-900'>{movie.title}</li>
                            </Link>
                        
                    </ul>
                )}
                </div>
            </div>
        </>
    )
}
