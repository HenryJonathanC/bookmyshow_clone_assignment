import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-700'>
        <div className='flex items-center justify-center pt-4 pb-4'>
            <div style={{height: '0.05rem'}} className='w-1/2 bg-gray-500'></div>
            <img className='ml-1 mr-1' alt='' src='https://in.bmscdn.com/webin/common/icons/logo.svg'/>
            <div style={{height: '0.05rem'}} className='w-1/2 bg-gray-500'></div>
        </div>
    </div>
  )
}

export default Footer