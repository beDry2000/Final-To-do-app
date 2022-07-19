import React from 'react'
import Calendar from './Calendar'
import ListMenu from './ListMenu';
import UserAvatar from './UserAvatar';

const Header = () => {
    return (

        <div className='grid justify-between items-center grid-cols-[80%_10%_10%]'>
            <div className='flex items-center'>
                <Calendar />
                <h1>Today</h1>
            </div>
            <UserAvatar/>
            <ListMenu />
        </div>
    )
}

export default Header