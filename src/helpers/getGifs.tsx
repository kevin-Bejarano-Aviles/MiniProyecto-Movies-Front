import { giftApi, key } from '../api/moviesApi';
import { numeroRandom } from '../funciones/numeroRandom';
import { GiftData, GifShow } from '../interfaces/GiftData';
export const getOneGiftByTitle = async(titulo:string)=>{
    try {
        const {data} = await giftApi.get<GiftData>(`/search?api_key=${key}&q=${titulo}&limit=1&offset=${numeroRandom(1,3)}&lang=es`)
        const gifs:GifShow[] = data.data.map((img)=>({
            id:img.id,
            title:img.title,
            url:img.images.downsized_medium.url
        }))
        return gifs;
    } catch (error) {
        console.log(error);
    }

}
