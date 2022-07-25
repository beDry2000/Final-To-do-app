import React from 'react'
import Header from './Header/Header';
import DisplayList from './DisplayList';
import { useTheme } from '../context/hooks';


const Home = () => {
  const { light } = useTheme();
  return (
    <div className={light ? 'body' : 'body dark'}>
      <div className="flex flex-col mx-auto h-screen max-h-screen max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <Header />
        <div id="list-container" className='flex relative flex-col pt-2 gap-8 w-10/12 md:w-9/12 mx-auto my-4 text-lg h-3/4 min-h-3/4' style={{ backgroundColor: light ? '' : '#e8e9eb', color: 'black' }}>
          <DisplayList />
        </div>
      </div>
    </div>

  )
}

export default Home