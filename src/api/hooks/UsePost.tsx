import { moviesApi } from '../moviesApi';
import { useState } from 'react';
import { ErrorField, ReqErrorForm } from '../../interfaces/ErrorForm';
import { AxiosError } from 'axios';
import { DataActorMovie, ErrorFormActorMovie, ErrorsForm } from '../../interfaces/ActorToMovie';
import { useNavigate } from 'react-router-dom';
import { DataFormMovie } from '../../interfaces/Movies';
import { ErrorRegister, FormLoginError, FormRegister } from '../../interfaces/Users';

export const UsePost = () => {
    const [errors, setErrors] = useState<ErrorField>()
    const [errorRegister, setErrorRegister] = useState<ErrorRegister>()
    const [errorActorFormMovie, setErrorActorFormMovie] = useState<ErrorsForm>()
    const [errorLogin, setErrorLogin] = useState<string>()
    const navigate = useNavigate()
    const createMovie = async(values:DataFormMovie)=>{
      try {
        await moviesApi.post('/movies/create',values);
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

    const userRegister = async(data:any)=>{
      try {
        await moviesApi.post('/users/register',data)
        navigate('/users/login');
      } catch (error) {
        const err = error as AxiosError;
        const laData = err.response?.data as FormRegister
        setErrorRegister(laData.data.errors)
      }
    }
    const userLogin = async(data:any)=>{
      try {
        const resp = await moviesApi.post('/users/login',data)
        navigate('/movies')
        console.log(resp);
        
      } catch (error) {
        const err = error as AxiosError
        const laData = err.response?.data as FormLoginError
        setErrorLogin(laData.msg)
        console.log(error);
        
      }
    }
    return {
      createMovie,
      errors,
      unirActorConMovie,
      errorActorFormMovie,
      userRegister,
      errorRegister,
      userLogin,
      errorLogin
    }
}
