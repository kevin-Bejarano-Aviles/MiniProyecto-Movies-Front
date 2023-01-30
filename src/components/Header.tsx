import { Link } from 'react-router-dom';

export const Header = () => {
    
   return (
        <>  
        <div className='flex flex-row flex-wrap justify-evenly'>
            <div className='m-2.5 p-1.5 bg-blue-800  flex justify-around rounded-2xl basis-[95%]'>
                <Link to={`/`}>
                    <div className='p-1.5 bg-sky-500 text-white rounded-2xl'>
                        Home
                    </div>
                </Link>
                <Link to={`/movies`}>
                    <div className='p-1.5 bg-sky-500 text-white rounded-2xl'>
                        Lista de peliculas
                    </div>
                </Link>
                <Link to={`/movies/create`}>
                    <div className='p-1.5 bg-sky-500 text-white rounded-2xl'>
                        Crear pelicula
                    </div>
                </Link>
                <Link to={`/movies/addActor`}>
                    <div className='p-1.5 bg-sky-500 text-white rounded-2xl'>
                        Añadir Actor a pelicula
                    </div>
                </Link>
            </div>
        </div>
            
        </>
    )
}

 