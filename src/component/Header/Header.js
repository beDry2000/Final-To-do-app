import React from 'react'
import Calendar from './Calendar'
import ListMenu from './ListMenu';
import ThemeBtn from './ThemeBtn';
import UserAvatar from './UserAvatar';

const Header = () => {
    return (

        <div className=' h-[112px] grid justify-between items-center grid-cols-[60%_20%_10%_10%] md:grid-cols-[65%_15%_10%_10%] lg:grid-cols-[70%_10%_10%_10%]'>
            <div className='flex items-center'>
                <Calendar />
                <h1>Today</h1>
            </div>
            <ThemeBtn />
            <UserAvatar/>
            <ListMenu />
        </div>
    )
}

export default Header