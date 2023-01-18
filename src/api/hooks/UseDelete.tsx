import { moviesApi } from '../moviesApi';
import { useNavigate } from 'react-router-dom';
export const UseDelete = () => {
  const navigate = useNavigate()
  const deleteMovie = async(id:string|undefined)=>{
    try {
      await moviesApi.delete(`/movies/delete/${id}`)
      navigate('/movies')
    } catch (error) {
      console.log(error);
    }
  }
  return{
    deleteMovie
  }
}
