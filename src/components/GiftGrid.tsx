import { useGift } from '../hooks/useGift';
import { GifItem } from './GifItem';
import { GifShow } from '../interfaces/GiftData';

export const GiftGrid = ({titulo}:{titulo:string}) => {
  const {images,isLoading} = useGift(titulo)
  return (
    <>
        {
            (isLoading) ? (<h2 className='text-center'>Cargando...</h2>) : ''
        }
        <div>
            {
                images?.map((image:GifShow)=>(
                        <GifItem
                            key={image.id}
                            {...image}
                        />
                ))
            }
        </div>
    </>
  )
}
