import React, { useEffect, useState } from 'react'
import GradeIcon from '@mui/icons-material/Grade';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { message } from 'antd';


const Movie = () => {

    const id=useParams()
    const [movie, setMovie]=useState()

    const fetchMovie = async()=>{
       await axios.get(`https://my-json-server.typicode.com/HenryJonathanC/bookMyShow_dummyData/movies/${id.id}`)
        .then(res=>setMovie(res.data))
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
        fetchMovie()
        console.log(movie)
    },[])
  return (
    <>
        {
            movie && 
            <>
            <div className='bg-slate-950'>
                <div className='ml-28 py-10 flex'>
                    <img className='w-72 rounded' src={movie.imgUrl} alt='' />
                    <div>
                        <div style={{width: '60rem'}} className='flex items-center justify-between'>
                            <h1 className='ml-5 text-4xl font-semibold'>{movie.title}</h1>
                            <div className='flex items-center opacity-60 px-3 py-1 rounded bg-zinc-500'>
                                <ShareOutlinedIcon />
                                <h1 className='ml-2 text-lg'>Share</h1>
                            </div>
                        </div>    
                        <div className='flex items-center mt-4 ml-4'>
                            <GradeIcon className='text-red-600 text-start' />
                            <h1 className='text-xl ml-3 font-medium'>{movie.rating}/10</h1>
                            <h1 className='ml-3 self-end'>{movie.votes} votes</h1>
                        </div>
                        <div style={{width: '30rem'}} className='flex text-start bg-neutral-700 justify-between items-center rounded-lg py-2 px-2 ml-5 mt-4'>
                            <div className='pl-2'>
                                <h1 className='text-xl font-medium'>Add your rating and reviews</h1>
                                <h1 className='opacity-70'> Your ratings matter</h1>
                            </div>
                            <button className='bg-white text-gray-950 mr-2 rounded px-2 py-1 font-medium'>Rate now</button>
                        </div>
                        <div className='flex flex-wrap'>
                            <h1 className='text-start ml-5 mt-5 bg-zinc-300 w-fit px-2 rounded text-black'>2D</h1>
                            <h1 className='text-start ml-5 mt-5 bg-zinc-300 w-fit px-2 rounded text-black'>English</h1>
                        </div>
                        <h1 className='text-start ml-5 mt-5 text-lg'>2h 30m . {movie.category} . UA . 5 May, 2023</h1>
                        <h1 onClick={()=>message.success(`Tickets booked Succesfully for the movie- ${movie.title}`)} className='bg-rose-500 text-start rounded-lg w-fit ml-5 mt-10 text-lg px-8 py-2 cursor-pointer'>Book Tickets</h1>
                    </div>
                </div>
                
            </div>
            <h1 className='text-black font-medium text-2xl ml-28 text-start mt-5'>About the movie</h1>
            <h1 style={{width: '65%'}} className='ml-28 text-black text-start mt-3 mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h1>
            </>
        }
    </>
  )
}

export default Movie