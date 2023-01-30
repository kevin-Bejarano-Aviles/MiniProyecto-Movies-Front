import { useEffect } from 'react';
import { UseDelete } from '../api/hooks/UseDelete';
import { UseGet } from '../api/hooks/UseGet';
import { fechaView } from '../funciones/devolverFecha';
import { useParams,Link} from 'react-router-dom';
import { Header } from '../components/Header';
import { Actor } from '../interfaces/Actors';
import { GiftGrid } from '../components/GiftGrid';
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
    const renderActors = (actor:Actor)=>{
        const fullName:string = `${actor.first_name} ${actor.last_name}`;
        return (
            <div
             key={actor.id.toString()}
             className='m-2.5 bg-orange-500 flex flex-col basis-1/6 border rounded-lg'
            >
                <Link
            to={`/actors/detail/${actor.id}`}
            >
            <GiftGrid
            key={actor.id}
            titulo= {fullName}
        />
        <p className='text-center'>{fullName}</p>
        </Link>
         </div>
        )
    }
    return (
        <>  
            <Header/>
            <h1 className='text-center'>Detalle de la pelicula: {oneMovie?.title}</h1>
            <div className='flex items-center justify-center h-5/6 mt-2.5'>
            <div className='flex flex-col w-3/4 border border-stone-800 rounded-2xl'>
                <div className='mx-2.5 mt-2.5'>
                <p>Titulo: {oneMovie?.title}</p>
                <p>Premios: {oneMovie?.awards}</p>
                <p>Rating: {oneMovie?.rating}</p>
                <p>Duracion: {oneMovie?.length}</p>
                <p>Fecha de estreno: {fechaView(oneMovie?.release_date)}</p>
                </div>
                <div className='mx-2.5'>
                    <p>Genero:</p>
                    {
                        !(oneMovie?.genero)
                        ? <p className='text-center'>Pelicula sin genero</p>
                        : 
                        <Link
                            to={`/genres/detail/${oneMovie?.genre_id}`}
                        >
                            <button className='border border-stone-800 rounded-2xl px-3.5 m-1.5 bg-purple-700 hover:bg-purple-800 text-white' >{oneMovie.genero.name}</button>
                        </Link>
                        
                    }
                    
                     {/* <Link className='text-blue-900' to={`/genres/detail/${oneMovie?.genre_id}`}>
                     { oneMovie?.genero?.name||' Sin genero'}
                    </Link> */}
                    
                </div>
                <div className='flex flex-col justify-center h-5/6 ml-2.5 mb-2.5'>
                <p>Actores:</p>
                <div className='flex flex-row flex-wrap justify-evenly'>
                {
                    !(oneMovie?.actores[0]?.id) 
                    ? <p>Actores no encontrados</p>
                    : oneMovie?.actores?.map(actor=>renderActors(actor))

                }
                </div>
                
            </div>
                <div>
                    <Link to={`/movies/edit/${oneMovie?.id}`}>
                    <button 
                        className='border border-stone-800 rounded-2xl px-3.5 m-1.5 bg-green-600 hover:bg-green-700 text-white' 
                    >
                        Modificar
                    </button>    
                    </Link>
                    
                    <button
                        className='border border-stone-800 rounded-2xl px-3.5 m-1.5 bg-red-600 hover:bg-red-700 text-white' 
                        onClick={eliminarMovie}
                    >
                        Eliminar
                    </button>
                </div>
                </div>
            </div>
            
            
        </>
    )
}
