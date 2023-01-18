import { moviesApi } from '../moviesApi';
import { useState } from 'react';
import { /* Data */ Errors, ReqErrorForm } from '../../interfaces/ErrorForm';
import { AxiosError } from 'axios';
import { DataActorMovie, ErrorFormActorMovie, ErrorsForm } from '../../interfaces/ActorToMovie';
import { useNavigate } from 'react-router-dom';
import { DataFormMovie } from '../../interfaces/OneMovie';

export const UsePost = () => {
    const [errors, setErrors] = useState<Errors>()
    const [errorActorFormMovie, setErrorActorFormMovie] = useState<ErrorsForm>()
    const navigate = useNavigate()
    const createMovie = async(values:DataFormMovie)=>{
      try {
        await moviesApi.post('/movies/create',values);
        // console.log('se Logro');
        navigate('/movies')
      } catch (error) {
        const err = error as AxiosError;
        const laData = err.response?.data as ReqErrorForm 
        setErrors(laData.data.errors)
      }
    }
    const unirActorConMovie = async(data:DataActorMovie)=>{
      try {
        await moviesApi.post('/movies/addActor',data)
        navigate(`/movies/detail/${data.idMovie}`)
      } catch (error) {
        const err = error as AxiosError;
        const laData = err.response?.data as ErrorFormActorMovie 
        setErrorActorFormMovie(laData.data.errors)
      }
    }  
    return {
      createMovie,
      errors,
      unirActorConMovie,
      errorActorFormMovie
    }
}
