import { Routes,Route } from 'react-router-dom';
import {
   Welcome,
   ActorDetail,
   AddActorToMovie,
   CreateMovie,
   EditMovie,
   GenreDetail,
   ListMovies,
   Login,
   MovieDetail,
   Register
} from "../pages"


export const PublicRoutes = () => {
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
      {/* <Route 
        path='/users/register'
        element={<Register/>}
      />
      <Route 
        path='/users/login'
        element={<Login/>}
      /> */}
    </Routes>
  )
}
