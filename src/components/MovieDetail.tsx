import { useEffect } from 'react';
import { UseDelete } from '../api/hooks/UseDelete';
import { UseGet } from '../api/hooks/UseGet';
import { fechaView } from '../funciones/devolverFecha';
import { useParams,Link} from 'react-router-dom';
import { Header } from './Header';
export const MovieDetail = () => {
    const {oneMovie,getOneMovie} = UseGet()
    const {deleteMovie} = UseDelete()
    const params = useParams()
    const idMovie = params.id!
    useEffect(() => {
        getOneMovie(idMovie)
    }, [])
    const eliminarMovie=()=>{
        deleteMovie(params.id)
    }    
    return (
        <>  
            <Header/>
            <h1 className='text-center'>Detalle de la pelicula {oneMovie?.title}</h1>
            <div className='flex flex-col w-1/2 border border-stone-800 rounded-2xl'>
                <div>
                <p>Titulo: {oneMovie?.title}</p>
                <p>Premios: {oneMovie?.awards}</p>
                <p>Rating: {oneMovie?.rating}</p>
                <p>Duracion: {oneMovie?.length}</p>
                <p>Fecha de estreno: {fechaView(oneMovie?.release_date)}</p>
                </div>
                <div>
                    <p>Genero:  
                     <Link className='text-blue-900' to={`/genres/detail/${oneMovie?.genre_id}`}>
                     { oneMovie?.genre?.name||' Sin genero'}
                    </Link>
                    </p>
                </div>
                <div>
                    <p>Actores:</p>
                    <p>{(oneMovie?.actors[0]?.first_name)? '': 'Actores no encontrados'}</p>
                    {oneMovie?.actors.map(actor=>                
                        <ul key={actor.id.toString()}>
                        <Link to={`/actors/detail/${actor.id}`}>
                            <li className='text-blue-900'>{actor.first_name} {actor.last_name}</li>    
                        </Link>
                        </ul>
                    )}
                </div>
                <div>
                    <Link to={`/movies/edit/${oneMovie?.id}`}>
                    <button 
                        className='border border-stone-800 rounded-2xl px-3.5 m-1.5' 
                    >
                        Modificar
                    </button>    
                    </Link>
            
                    <button
                        className='border border-stone-800 rounded-2xl px-3.5 m-1.5' 
                        onClick={eliminarMovie}
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </>
    )
}
