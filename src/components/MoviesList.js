import React, { useEffect, useState } from 'react'
import GradeIcon from '@mui/icons-material/Grade';
import AdContainer from './AdContainer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MoviesList = () => {

    const [movieData, setMovieData] = useState()
    const navigate = useNavigate()

    const fetchData = async () =>{
       await axios.get('https://my-json-server.typicode.com/HenryJonathanC/bookMyShow_dummyData/movies')
        .then(res=>setMovieData(res.data))
        .catch(err => console.error(err))
    }

    useEffect(()=>{
        fetchData()
    }, [])
  return (
    <>
        <AdContainer />
        <div className='ml-28 mt-4 mb-10'>
            <h1 className='text-black text-start text-2xl font-semibold'>Recommended Movies</h1>   
            {movieData && 
                <div className='flex flex-wrap ml-10'>
                    {movieData?.map((movie, i)=>{
                        return <div key={i} className='mt-4 mr-10'>
                        <div className='cursor-pointer' onClick={()=> navigate(`/movie/${movie.id}`)}>
                            <div style={{marginTop: '19.5rem'}} className='flex absolute bg-black border-t border-t-green-200 rounded-b w-52'>
                                <GradeIcon className='text-red-700' />
                                <h1 className='ml-3'>{movie.rating}/10</h1>
                                <h1 className='ml-3'>{movie.votes} votes</h1>
                            </div>
                            <img className='w-52 h-80 rounded' src={movie.imgUrl} alt='' />
                            <h1 className='text-black mt-7 w-52 text-start text-lg font-medium'>{movie.title}</h1>
                        </div>
                            <h1 className='text-gray-500  w-52 text-start'>{movie.category}</h1>
                        </div>
                    })}
                    {/* <div className='mt-4 mr-10'>
                    <Link to='/movie'>
                        <div style={{marginTop: '19.5rem'}} className='flex absolute bg-black border-t border-t-green-200 rounded-b w-52'>
                            <GradeIcon className='text-red-700' />
                            <h1 className='ml-3'>8.8/10</h1>
                            <h1 className='ml-3'>49.9K votes</h1>
                        </div>
                        <img className='w-52 h-80 rounded' src='https://m.media-amazon.com/images/M/MV5BNzZmOTU1ZTEtYzVhNi00NzQxLWI5ZjAtNWNhNjEwY2E3YmZjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg' alt='' />
                        <h1 className='text-black mt-7 w-52 text-start text-lg font-medium'>Fast X</h1>
                    </Link>
                        <h1 className='text-gray-500  w-52 text-start'>Action/Adventure/Crime/Thriller</h1>
                    </div>
                    <div className='mt-4 mr-10'>
                        <Link to='/movie'>
                            <div style={{marginTop: '19.5rem'}} className='flex absolute bg-black border-t border-t-green-200 rounded-b w-52'>
                                <GradeIcon className='text-red-700' />
                                <h1 className='ml-3'>8.9/10</h1>
                                <h1 className='ml-3'>46.7K votes</h1>
                            </div>
                            <img className='w-52 h-80 rounded' src='https://image.tmdb.org/t/p/original/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg' alt='' />
                            <h1 className='text-black mt-7 text-start text-lg font-medium w-52'>Guardians of the Galaxy Vol. 3</h1>
                        </Link>
                        <h1 className='text-gray-500  w-52 text-start'>Action/Adventure/Comedy/Sci-Fi</h1>
                    </div>
                    <div className='mt-4 mr-10'>
                        <Link to='/movie'>
                            <div style={{marginTop: '19.5rem'}} className='flex absolute bg-black border-t border-t-green-200 rounded-b w-52'>
                                <ThumbUpIcon className='text-green-500 ml-1' />
                                <h1 className='ml-3'>92.1K likes</h1>
                            </div>
                            <img className='w-52 h-80 rounded' src='https://cdnb.artstation.com/p/assets/images/images/048/509/001/large/hazza-jarrar-mm.jpg?1650236822' alt='' />
                            <h1 className='text-black mt-7 w-52 text-start text-lg font-medium'>Spider-Man: Across The Spider-Verse</h1>
                        </Link>
                        <h1 className='text-gray-500  w-52 text-start'>Action/Adventure/Animation</h1>
                    </div>
                    <div className='mt-4 mr-10'>
                        <Link to='/movie'>
                            <div style={{marginTop: '19.5rem'}} className='flex absolute bg-black border-t border-t-green-200 rounded-b w-52'>
                                <GradeIcon className='text-red-700' />
                                <h1 className='ml-3'>8.9/10</h1>
                                <h1 className='ml-3'>46.7K votes</h1>
                            </div>
                            <img className='w-52 h-80 rounded' src='https://m.media-amazon.com/images/M/MV5BYTUxYjczMWUtYzlkZC00NTcwLWE3ODQtN2I2YTIxOTU0ZTljXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg' alt='' />
                            <h1 className='text-black mt-7 text-start text-lg font-medium w-52'>The Little Mermaid</h1>
                        </Link>
                        <h1 className='text-gray-500  w-52 text-start'>Adventure/Family/Fantasy</h1>
                    </div>
                    <div className='mt-4 mr-10'>
                        <Link to='/movie'>
                            <div style={{marginTop: '19.5rem'}} className='flex absolute bg-black border-t border-t-green-200 rounded-b w-52'>
                                <GradeIcon className='text-red-700' />
                                <h1 className='ml-3'>9.3/10</h1>
                                <h1 className='ml-3'>37.5K votes</h1>
                            </div>
                            <img className='w-52 h-80 rounded' src='https://m.media-amazon.com/images/M/MV5BZWFhZjBjY2ItMmZmMC00N2RjLTg2ZjktNDUwNmYwNmVjMDA5XkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_FMjpg_UX1000_.jpg' alt='' />
                            <h1 className='text-black mt-7 text-start text-lg font-medium w-52'>2018</h1>
                        </Link>
                        <h1 className='text-gray-500 w-52 text-start'>Drama/Thriller</h1>
                    </div> */}
                    
                </div>
            }
        </div>
    </>
  )
}

export default MoviesList