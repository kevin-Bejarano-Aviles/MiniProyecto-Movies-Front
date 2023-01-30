import { useState, useEffect } from 'react';
import { getOneGiftByTitle } from '../helpers/getGifs';
import { GifShow } from '../interfaces/GiftData';


export const useGift = (titulo:string) => {
    const [images, setImages] = useState<GifShow[]|undefined>([])
    const [isLoading, setIsLoading] = useState(true)
    const getImages = async()=>{
        const newImgaes = await getOneGiftByTitle(titulo)
        setImages(newImgaes);
        setIsLoading(false);
    }
    useEffect(()=>{
        getImages()
    },[]);

    return {
        images,
        isLoading
    }
}
