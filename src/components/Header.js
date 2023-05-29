import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <>
        <div className='bg-slate-700 flex justify-between items-center h-16'>
            <div className='flex ml-28 items-center'>
                <img className='' alt='' src='https://in.bmscdn.com/webin/common/icons/logo.svg'/>
                <input style={{width: '35rem'}} className='ml-6 rounded px-10 h-9' type='text' placeholder='Search for Movies, Events, Plays, Sports and Activities' />
                <SearchIcon style={{marginTop: '.3rem'}} className='text-gray-500 absolute ml-36 ' />
            </div>
            <div className='flex mr-28 items-center'>
                <h1>Bangalore</h1>
                <ArrowDropDownIcon className='mr-5 cursor-pointer' />
                <button className='cursor-pointer mr-5 bg-rose-500 rounded-lg px-5 py-2 text-xs font-medium'>Sign in</button>
                <MenuIcon className='cursor-pointer' />
            </div>
        </div>
        <div className='bg-slate-800 flex justify-between items-center text-sm font-medium text-gray-300'>
            <div style={{width: '28rem'}} className='flex ml-28 justify-between py-2 items-center'>
                <h1 className='cursor-pointer'>Movies</h1>
                <h1 className='cursor-pointer'>Stream<sup className='text-red-600'>New</sup></h1>
                <h1 className='cursor-pointer'>Events</h1>
                <h1 className='cursor-pointer'>Plays</h1>
                <h1 className='cursor-pointer'>Sports</h1>
                <h1 className='cursor-pointer'>Activities</h1>
                <h1 className='cursor-pointer'>Buzz</h1>
            </div>
            <div className='flex mr-28 justify-between items-center font-normal text-white w-80'>
                <h1 className='cursor-pointer'>ListYourShow</h1>
                <h1 className='cursor-pointer'>Corporates</h1>
                <h1 className='cursor-pointer'>Offers</h1>
                <h1 className='cursor-pointer'>Gift Cards</h1>
            </div>
        </div>
    </>
  )
}

export default Header