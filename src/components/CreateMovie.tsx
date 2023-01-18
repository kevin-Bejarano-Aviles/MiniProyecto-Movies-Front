import { UseForm } from '../hooks/UseForm';
import { UseGet } from '../api/hooks/UseGet';
import { useEffect } from 'react';
import { Genero } from '../interfaces/AllGeneres';
import { UsePost } from '../api/hooks/UsePost';
import { Header } from './Header';
import { FormEvent } from '../interfaces/tipos';

export const CreateMovie = () => {
  //es como un tipo de dato
  const {formulario,OnChance} = UseForm({
    title:'',
    rating:'',
    awards:'',
    release_date:'',
    length:'',
    genre_id:''
  })
  const {generos,allGenres} = UseGet()
  const {createMovie,errors} = UsePost()
  useEffect(() => {
    allGenres()
  }, [])

  const renderGeneros = (genero:Genero)=>{
    return (
      <option key={genero.id.toString()} value={genero.id}>
        {genero.name}
      </option>
    )
  }
  const OnSubmit = (evento:FormEvent)=>{
    evento.preventDefault()
    createMovie(formulario)
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
              <h3 className='text-center'>Crear pelicula</h3>
              <div className='m-2.5 p-2.5 flex flex-col'>
                <input 
                className='border border-stone-800 rounded-2xl pl-2.5'
                type="text"
                name='title'
                placeholder="Titulo"
                value = {formulario.title}
                onChange= {(e)=>OnChance(e.target.value,'title')}
                />
                <p className='text-red-600'>{errors?.title?.msg}</p>
              </div>
              <div className='m-2.5 p-2.5 flex flex-col'>
                <input 
                className='border border-stone-800 rounded-2xl pl-2.5'
                type="text"
                name='rating'
                placeholder="Rating"
                value = {formulario.rating}
                onChange= {(e)=>OnChance(e.target.value,'rating')}
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
                    value = {formulario.awards}
                    onChange= {(e)=>OnChance(e.target.value,'awards')}
                  />
                  <p className='text-red-600'>{errors?.awards?.msg}</p>
                </div>
                <div className='m-1.5 basis-1/2'>
                  <input 
                    className='border border-stone-800 rounded-2xl px-1.5'
                    type="date"
                    name='release_date'
                    placeholder="Fecha de estreno"
                    value = {formulario.release_date}
                    onChange= {(e)=>OnChance(e.target.value,'release_date')}
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
                    value = {formulario.length}
                    onChange= {(e)=>OnChance(e.target.value,'length')}
                  />  
                  <p className='text-red-600'>{errors?.length?.msg}</p>
                </div>
                <div className='m-1.5 basis-1/2' >
                  <select className='border border-stone-800 rounded-2xl px-1.5' onChange={(e)=>OnChance(e.target.value,'genre_id')}>
                    <option selected disabled hidden value="">Escoge un genero</option>
                    {generos.map(movie=>renderGeneros(movie))}
                  </select>
                  <p className='text-red-600'>{errors?.genre_id?.msg}</p>
                </div>
              </div>
              <div className='m-2.5 p-2.5 flex justify-around'>
                <button
                  className='border border-stone-800 rounded-2xl px-3.5 m-1.5' 
                  type='reset'>
                    Cancelar
                </button>
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
