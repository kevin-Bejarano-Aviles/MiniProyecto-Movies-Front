import { useState } from 'react'
import { ApiMovies, Movies } from '../../interfaces/AllMovies';
import { giftApi, key, moviesApi } from '../moviesApi';
import { Movie, MovieDetail, /* Genre */ } from '../../interfaces/OneMovie';
import { AllGeneros, Genero } from '../../interfaces/AllGeneres';
import { DetailGenre, GeneroDetail } from '../../interfaces/OneGenre';
import { ActorDetailByID, OneActor } from '../../interfaces/OneActor';
import { Actors, TodosLosActores } from '../../interfaces/AllActors';
import { LaDataGift, ValeVergaLaVida, SiSiVale } from '../../interfaces/GiftData';
/* const initialGenero:Genre ={
    id:0,
    name:'',
    ranking:0,
    active:0,
    createdAt:'',
    updatedAt:null
}
const initialMovie:Movie = { 
    id:0,
    title:'',
    rating:'',
    awards:0,
    release_date:'',
    length:0,
    genre_id:0,
    createdAt:null,
    updatedAt:null,
    genre:initialGenero,
    actors:[]
} */

export const UseGet = () => {
    const [movies, setMovies] = useState<Movies[]>([])
    const [oneMovie, setOneMovie] = useState<Movie>()//initialValue
    const [generos, setGeneros] = useState<Genero[]>([])
    const [oneGenre, setOneGenre] = useState<GeneroDetail>()
    const [actors, setActors] = useState<Actors[]>([])
    const [oneActor, setOneActor] = useState<OneActor>({
        id:0,
        first_name:'',
        last_name:'',
        rating:'',
        favorite_movie_id:0, 
        createdAt:null,
        updatedAt:null,
        movies:[]
    })
    const [giftData, setGiftData] = useState<SiSiVale>()
    const getAllMovies = async()=>{
        try {
            const resp = await moviesApi.get<ApiMovies>('/movies')
            setMovies(resp.data.data)
            console.log(resp.data.data);
            
        } catch (error) {
            console.log(error);
            
        }
    }
    const getOneMovie = async(id:string)=>{
        try {
            const {data} = await moviesApi.get<MovieDetail>(`/movies/detail/${id}`)
            setOneMovie(data.data);
            console.log(data.data);
            
        } catch (error) {
            console.log(error);
        }
    }
    const allGenres = async()=>{
        try {
            const {data} = await moviesApi.get<AllGeneros>('/genres')
            setGeneros(data.data)
            console.log(data.data);
        } catch (error) {
            console.log(error);
        }
    }
    const getGenreById = async(id:string|undefined)=>{
        try {
            const {data} = await moviesApi.get<DetailGenre>(`/genres/${id}`)
            setOneGenre(data.data)
            console.log(data.data);
        } catch (error) {
            console.log(error);
        }
    }
    const getAllActors = async()=>{
        try {
            const {data} = await moviesApi.get<TodosLosActores>('/actors')
            setActors(data.data)
            console.log(data.data);
        } catch (error) {
            console.log(error);
        }
    }
    const getActorById = async(id:string)=>{
        try {
            const {data} = await moviesApi.get<ActorDetailByID>(`/actors/${id}`)
            setOneActor(data.data)
            console.log(data.data);
        } catch (error) {
            console.log(error);
        }
    }
    const getOneGiftByTitle = async(titulo:string)=>{
        try {
            const {data} = await giftApi.get<ValeVergaLaVida>(`/search?api_key=${key}&q=${titulo}&limit=1`)
            /* data.data.map(img=>({
                id:img.id,
                title:img.title,
                url:img.url
            })) */
            setGiftData(data.data[0])
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
        getOneGiftByTitle,
        giftData
    }
}
