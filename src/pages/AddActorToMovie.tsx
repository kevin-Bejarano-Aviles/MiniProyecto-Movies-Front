import { UseGet } from '../api/hooks/UseGet';
import { useEffect } from 'react';
import { UseForm } from '../hooks/UseForm';
import { UsePost } from '../api/hooks/UsePost';
import { Header } from '../components/Header';
import { FormEvent } from '../interfaces/tipos';
import { Actor } from '../interfaces/Actors';
import { Movie } from '../interfaces/Movies';
import {useNavigate} from 'react-router-dom'
export const AddActorToMovie = () => {
    const navigate = useNavigate();
    const {OnChance,formulario} = UseForm({
        idMovie:'',
        idActor:'',
    })
    const {actors,getAllActors,movies,getAllMovies}=UseGet()
    const {unirActorConMovie,errorActorFormMovie}=UsePost()
    useEffect(() => {
      getAllActors()
      getAllMovies()
    }, [])
    const renderActors = (actor:Actor)=>{
        return(
            <option key={actor.id.toString()} value={actor.id}>
                {actor.first_name} {actor.last_name}
            </option>
        )
    }
    const renderMovies = (movie:Movie)=>{
        return(
            <option key={movie.id.toString()} value={movie.id}>
                {movie.title}
            </option>
        )
    }
    const OnSubmit=(evento:FormEvent)=>{
        evento.preventDefault()
        unirActorConMovie(formulario)
        
        
    }
    return (
        <>
            <Header/>
            
            <div className='flex items-center justify-center h-5/6'>
                <div className='basis-2/6 h-1/4 border border-stone-800 rounded-2xl p-2.5 m-2.5'>
                    <form onSubmit={(e)=>OnSubmit(e)}>
                    <h3 className='text-center'>Escoge un actor para asignar a la pelicula</h3>
                        <div className='m-2.5 p-2.5 flex flex-col'>
                            <select className='border border-stone-800 rounded-2xl px-1.5 m-1.5' name="idMovie" onChange={(e)=>OnChance(e.target.value,'idMovie')}>
                                <option selected disabled hidden value="">Escoge una pelicula</option>
                                {movies.map(movie=>renderMovies(movie))}
                            </select>
                            <p className='text-red-600'>{errorActorFormMovie?.idMovie?.msg}</p>
                            <select className='border border-stone-800 rounded-2xl px-1.5 m-1.5' name="idActor" onChange={(e)=>OnChance(e.target.value,'idActor')} >
                                <option selected disabled hidden value="">Escoge un actor</option>
                                {actors.map(actor=>renderActors(actor))}
                            </select>
                            <p className='text-red-600'>{errorActorFormMovie?.idActor?.msg}</p>
                            <div className='flex justify-between'>
                            <button onClick={()=>navigate('/movies')} className='border border-stone-800 rounded-2xl w-20 ml-2 bg-red-500 hover:bg-red-700 text-white '  type='reset'>Cancelar</button>
                            <button className='border border-stone-800 rounded-2xl w-20 mr-2 bg-sky-500 hover:bg-sky-700 text-white '  type='submit'>Enviar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            
            
        </>    
    )
}
