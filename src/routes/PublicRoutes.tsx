import { Routes,Route,useParams } from 'react-router-dom';
import { CreateMovie } from '../components/CreateMovie';
import { ListMovies } from '../components/ListMovies';
import { MovieDetail } from '../components/MovieDetail';
import { ActorDetail } from '../components/ActorDetail';
import { GenreDetail } from '../components/GenreDetail';
import { AddActorToMovie } from '../components/AddActorToMovie';
import { EditMovie } from '../components/EditMovie';
import { Welcome } from '../components/Welcome';

export const PublicRoutes = () => {
  const {id}= useParams()
  return (
    <Routes>
      <Route 
        path='/'
        element={<Welcome/>}
      />
      <Route 
        path='/movies'
        element={<ListMovies/>}
      />
      <Route 
        path='/movies/detail/:id'
        element={<MovieDetail/>}
      />
      <Route 
        path='/movies/create'
        element={<CreateMovie/>}
      />
      <Route 
        path='/movies/edit/:id'
        element={<EditMovie/>}
      />
      <Route 
        path='/movies/addActor'
        element={<AddActorToMovie/>}
      />
      <Route 
        path='/actors/detail/:id'
        element={<ActorDetail/>}
      />
      <Route 
        path='/genres/detail/:id'
        element={<GenreDetail/>}
      />
    </Routes>
  )
}
