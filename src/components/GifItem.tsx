import { GifShow } from '../interfaces/GiftData';

export const GifItem = ({ title, url, id }:GifShow) => {

    return (
        <div className='h-56 m-1.5 bg-green-200'>
          <img className='w-full h-full' src={ url } alt={ title } />
      </div>
    )
  }
  