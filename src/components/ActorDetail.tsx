import { useEffect } from 'react';
import { UseGet } from '../api/hooks/UseGet';
import { useParams,Link} from 'react-router-dom';
import { Header } from './Header';
export const ActorDetail = () => {
    const {oneActor,getActorById}=UseGet()
    const params = useParams()
    const id = params.id!;
    useEffect(() => {
        getActorById(id)
    }, [])
    
    return (
        <>
            <Header/>
            <h1 className='text-center'>Detalle del actor {oneActor.first_name}</h1>
            <div className='flex flex-col w-1/2 border border-stone-800 rounded-2xl'>
                <div>
                    <p>Nombre completo del actor: {oneActor?.first_name} {oneActor?.last_name}</p>
                    <p>Rating: {oneActor?.rating}</p>
                </div>
                <div>
                    <p>Peliculas en las que participó:</p>
                    {
                        oneActor?.movies.map(movie=>
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
