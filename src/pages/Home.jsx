import React from 'react'

const Home = () => {
  return (
    <div className='flex min-h-screen justify-center items-center w-full '>
      <div className=' shadow-xl gap-4 lg:max-w-xl md:max-w-lg w-full rounded p-4 flex flex-col'>
        <h1 className='font-bold text-xl text-gray-800'>Student Login</h1>
        <input className='p-3 border rounded' type="text" placeholder='Enter your id' />
        <input className='p-3 border rounded' type="text" placeholder='Enter Correct Password' />

        <a href='/check' className='bg-blue-500 rounded p-3 text-white '>Login</a>

      </div>

    </div>
  )
}

export default Home