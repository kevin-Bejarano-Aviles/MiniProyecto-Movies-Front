import { useState } from 'react'
import { Actor, ActorDetailByID, ActorWithInclude, AllActors } from '../../interfaces/Actors';
import { AllGenres, Genre, GenreDetailById, GenreWithInclude } from '../../interfaces/Genres';
import { Movie, AllMovies, MovieDetailById, MovieWithInclude } from '../../interfaces/Movies';
import { moviesApi } from '../moviesApi';

export const UseGet = () => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [oneMovie, setOneMovie] = useState<MovieWithInclude>()//initialValue
    const [generos, setGeneros] = useState<Genre[]>([])
    const [oneGenre, setOneGenre] = useState<GenreWithInclude>()
    const [actors, setActors] = useState<Actor[]>([])
    const [oneActor, setOneActor] = useState<ActorWithInclude>({
        id:0,
        first_name:'',
        last_name:'',
        rating:'',
        favorite_movie_id:0, 
        createdAt:null,
        updatedAt:null,
        movies:[]
    })
    const getAllMovies = async()=>{
        try {
            const resp = await moviesApi.get<AllMovies>('/movies')
            setMovies(resp.data.data)           
        } catch (error) {
            console.log(error);
            
        }
    }
    const getOneMovie = async(id:string)=>{
        try {
            const {data} = await moviesApi.get<MovieDetailById>(`/movies/detail/${id}`)
            setOneMovie(data.data);
        } catch (error) {
            console.log(error);
        }
    }
    const allGenres = async()=>{
        try {
            const {data} = await moviesApi.get<AllGenres>('/genres')
            setGeneros(data.data)
        } catch (error) {
            console.log(error);
        }
    }
    const getGenreById = async(id:string|undefined)=>{
        try {
            const {data} = await moviesApi.get<GenreDetailById>(`/genres/${id}`)
            setOneGenre(data.data)
        } catch (error) {
            console.log(error);
        }
    }
    const getAllActors = async()=>{
        try {
            const {data} = await moviesApi.get<AllActors>('/actors')
            setActors(data.data)
        } catch (error) {
            console.log(error);
        }
    }
    const getActorById = async(id:string)=>{
        try {
            const {data} = await moviesApi.get<ActorDetailByID>(`/actors/${id}`)
            setOneActor(data.data)
        } catch (error) {
            console.log(error);
        }
    }
    return {
        getOneMovie,
        oneMovie,
        movies,
        getAllMovies,
        allGenres,
        generos,
        getGenreById,
        oneGenre,
        getActorById,
        oneActor,
        getAllActors,
        actors,
    }
}
