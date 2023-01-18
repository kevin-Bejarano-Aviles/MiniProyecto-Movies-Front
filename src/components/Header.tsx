import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <>
            <div className='m-2.5 p-1.5 bg-orange-500 flex justify-around rounded-2xl'>
                <Link to={`/`}>
                    <div className='p-0.5 bg-gray-400 rounded-2xl'>
                        Home
                    </div>
                </Link>
                <Link to={`/movies`}>
                    <div className='p-0.5 bg-gray-400 rounded-2xl'>
                        Lista de peliculas
                    </div>
                </Link>
                <Link to={`/movies/create`}>
                    <div className='p-0.5 bg-gray-400 rounded-2xl'>
                        Crear pelicula
                    </div>
                </Link>
                <Link to={`/movies/addActor`}>
                    <div className='p-0.5 bg-gray-400 rounded-2xl'>
                        Añadir Actor a pelicula
                    </div>
                </Link>
            </div>
        </>
    )
}
