import React from 'react'
import Header from './Header/Header';
import DisplayList from './DisplayList';


const Home = () => {
  return (
    <div className="flex flex-col max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto my-10">
      <Header />
      <div className='flex relative flex-col gap-4 w-10/12 md:w-9/12 mx-auto my-4 text-lg'>
        <DisplayList />
      </div>
    </div>
  )
}

export default Home