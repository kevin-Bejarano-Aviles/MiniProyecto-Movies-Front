import { UseGet } from '../api/hooks/UseGet';
import { UsePut } from '../api/hooks/UsePut';
import { useEffect, useState } from 'react';
import { Genero } from '../interfaces/AllGeneres';
import { fechaEdit } from '../funciones/devolverFecha';
import { moviesApi } from '../api/moviesApi';
import { Link, useParams } from 'react-router-dom';
import { Header } from './Header';
import { FormEvent } from '../interfaces/tipos';



// type MovieLoca = Omit<Movie,'id'|'createdAt'|'updatedAt'|'genre'|'actors'>
export const EditMovie = () => {
    const [title, setTitle] = useState('')
    const [rating, setRating] = useState('')
    const [awards, setAwards] = useState('')
    const [release_date, setRelease_date] = useState('')
    const [length, setLength] = useState('')
    const [genre_id, setGenre_id] = useState('')
    const [genero, setGenero] = useState('')
    const {oneMovie,getOneMovie,generos,allGenres} = UseGet()
    const {updateMovie,errors} = UsePut()
    const params = useParams()
    const movieId = params.id
    const data ={
      title,
      rating,
      awards,
      release_date,
      length,
      genre_id,
    }
    useEffect(() => {
        allGenres()
        traerDeApi(movieId)
    },[])
    const traerDeApi = async(id:string|undefined)=>{
      try {
        const {data} = await moviesApi.get(`/movies/detail/${id}`)  
        setTitle(data.data.title)
        setRating(data.data.rating)
        setAwards(data.data.awards)
        const fecha = fechaEdit(data.data.release_date)
        setRelease_date(fecha)
        setLength(data.data.length)
        setGenre_id(data.data.genre_id)
        setGenero(data.data.genre.name)
      } catch (error) {
        console.log(error);
      }
      

    }
    const renderGeneros = (genero:Genero)=>{
        return (
          <option key={genero.id.toString()} value={genero.id}>
            {genero.name}
          </option>
        )
      }

    const OnSubmit = (evento:FormEvent)=>{
        evento.preventDefault()
        updateMovie(data,movieId)
        //dispara el put
    }
  return (
    <>
      <Header/>
        <div className='flex items-center justify-center h-screen'>
          <div className='basis-2/6 h-4/6 border border-stone-800 rounded-2xl p-2.5 m-2.5'>
            <form 
            onSubmit={(e)=>OnSubmit(e)}
            className='flex flex-col'
            > 
              <h3 className='text-center'>Modificar pelicula</h3>
              <div className='m-2.5 p-2.5 flex flex-col'>
                <input 
                className='border border-stone-800 rounded-2xl pl-2.5'
                type="text"
                name='title'
                placeholder="Titulo"
                value = {title}
                onChange= {(e)=>setTitle(e.target.value)}
                />
                <p className='text-red-600'>{errors?.title?.msg}</p>
              </div>
              <div className='m-2.5 p-2.5 flex flex-col'>
                <input 
                className='border border-stone-800 rounded-2xl pl-2.5'
                type="text"
                name='rating'
                placeholder="Rating"
                value = {rating}
                onChange= {(e)=>setRating(e.target.value)}
                />
                <p className='text-red-600'>{errors?.rating?.msg}</p>
              </div>
              <div className='m-2.5 p-2.5 flex justify-evenly '>
                <div className='m-1.5 basis-1/2'>
                  <input 
                    className='border border-stone-800 rounded-2xl pl-2.5'
                    type="number"
                    name='awards'
                    placeholder="Premios"
                    value = {awards}
                    onChange= {(e)=>setAwards(e.target.value)}
                  />
                  <p className='text-red-600'>{errors?.awards?.msg}</p>
                </div>
                <div className='m-1.5 basis-1/2'>
                  <input 
                    className='border border-stone-800 rounded-2xl px-1.5'
                    type="date"
                    name='release_date'
                    placeholder="Fecha de estreno"
                    value = {release_date}
                    onChange= {(e)=>setRelease_date(e.target.value)}
                  />
                  <p className='text-red-600'>{errors?.release_date?.msg}</p>
                </div>
              </div>
              <div className='m-2.5 p-2.5 flex justify-evenly'>
                <div className='m-1.5 basis-1/2'>
                  <input 
                    className='border border-stone-800 rounded-2xl pl-2.5'
                    type="number"
                    name='length'
                    placeholder="Duracion"
                    value = {length}
                    onChange= {(e)=>setLength(e.target.value)}
                  />  
                  <p className='text-red-600'>{errors?.length?.msg}</p>
                </div>
                <div className='m-1.5 basis-1/2' >
                  <select className='border border-stone-800 rounded-2xl px-1.5' onChange={(e)=>setGenre_id(e.target.value)}>
                  <option selected disabled hidden value={genre_id}>{genero}</option>
                    {generos.map(movie=>renderGeneros(movie))}
                  </select>
                  <p className='text-red-600'>{errors?.genre_id?.msg}</p>
                </div>
              </div>
              <div className='m-2.5 p-2.5 flex justify-around'>
                <Link to={`/movies/detail/${movieId}`}>
                <button
                  className='border border-stone-800 rounded-2xl px-3.5 m-1.5' 
                  >
                    Cancelar
                </button>
                </Link>
                  <button
                    className='border border-stone-800 rounded-2xl px-3.5 m-1.5' 
                    type='submit'>
                      Enviar
                  </button>     
              </div>
            </form>
          </div>
        </div>
    </>
  )
}