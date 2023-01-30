import { useEffect } from 'react';
import { UseGet } from '../api/hooks/UseGet';
import { useParams,Link} from 'react-router-dom';
import { Header } from '../components/Header';
import { Movie } from '../interfaces/Movies';
import { GiftGrid } from '../components/GiftGrid';
export const ActorDetail = () => {
    const {oneActor,getActorById}=UseGet()
    const params = useParams()
    const id = params.id!;
    useEffect(() => {
        getActorById(id)
    }, [])
    const renderMovies = (movie:Movie)=>{
        let title:string
    if(movie.title.length>17){
      title = movie.title.substring(0,14)
    }else{
      title = movie.title.substring(0,17)
    }
        return(
            <div
                key={movie.id.toString()}
                className='m-2.5 bg-orange-500 flex flex-col basis-1/4 border rounded-lg'
            >
            <Link
                to={`/movies/detail/${movie.id}`}
            >
                <GiftGrid
                key={movie.id}
                titulo = {title}
                />
            <p className='text-center'>{movie.title}</p>
            </Link>
            </div>
        )
    }
    return (
        <>
            <Header/>
            <h1 className='text-center'>Detalle del actor {oneActor.first_name}</h1>
            <div className='flex items-center justify-center h-5/6 mt-2.5'>
            <div className='flex flex-col w-1/2 border border-stone-800 rounded-2xl'>
                <div className='mx-2.5 mt-2.5'>
                    <p>Nombre completo del actor: {oneActor?.first_name} {oneActor?.last_name}</p>
                    <p>Rating: {oneActor?.rating}</p>
                </div>
                <div className='flex flex-col justify-center h-5/6 ml-2.5 mb-2.5'>

                    <p>Peliculas en las que participó:</p>
                    <div className='flex flex-row flex-wrap justify-evenly'>
                        {
                            !(oneActor?.movies[0]?.id)
                            ? <p>Peliculas no entontradas del actor</p>
                            :  oneActor.movies.map(movie=>renderMovies(movie))
                        }
                    </div>
                  {/*   {
                        oneActor?.movies.map(movie=>
                            <ul key={movie.id.toString()}>
                                <Link to={`/movies/detail/${movie.id}`}>
                                    <li className='text-blue-900'>{movie.title}</li>
                                </Link>
                            
                            </ul>
                    )} */}
                </div>
            </div>
            </div>
            
        </>   
    )
}
