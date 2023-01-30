import { useState } from 'react';
import { ErrorField, ReqErrorForm } from '../../interfaces/ErrorForm';
import { moviesApi } from '../moviesApi';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { DataFormMovie } from '../../interfaces/Movies';
export const UsePut = () => {
    const [errors, setErrors] = useState<ErrorField>()
    const navigate= useNavigate()
    const updateMovie = async(values:DataFormMovie,id:string|undefined)=>{
      try {
        await moviesApi.put(`/movies/edit/${id}`,values)
        navigate(`/movies/detail/${id}`)
      } catch (error) {
        const err = error as AxiosError;
        const laData = err.response?.data as ReqErrorForm
        setErrors(laData.data.errors)
      }
    }
    return {
      updateMovie,
      errors
    }
}
