import React from 'react'
import useListContext from '../../context/hooks';
import { checkJob } from '../reducer/actions';
import AddToDo from './AddToDo'
import DelBtn from './DelBtn';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import EditBtn from './EditBtn';

import { useLoad } from '../../context/hooks';



const Doing = () => {
    const { loading } = useLoad();
    const [state, dispatch] = useListContext();
    const { todos } = state;
    const doneTasks = todos.filter(({ completed }) => completed)
        .map(task => task.id);


    const handleDone = (id, checked) => {
        dispatch(checkJob(id));
    }
    const doingList = todos.filter(({ completed, removed }) => !completed && !removed);

    return (
        <>
            {
                loading &&
                <Box sx={{ width: '80%' }}>
                    <Skeleton sx={{ height: '70px' }} />
                    <Skeleton sx={{ height: '70px' }} />
                    <Skeleton sx={{ height: '70px' }} />
                </Box>
            }
            <div id="list-doing-jobs" className='relative flex flex-col gap-4  min-w-300px max-h-[32rem] overflow-auto'>
                {
                    !loading && doingList.length === 0 ?
                        <p className='text-center mt-[10%]'><i>Let's write some tasks!</i></p>
                        :
                        doingList
                            .map((todo, index) => (
                                <div key={index} className='flex justify-between hover:shadow-lg px-6 my-1 pb-2 rounded-lg mt-3'>

                                    <input className="inp-cbx" id={todo.name} type="checkbox" style={{ display: "none" }}
                                        checked={doneTasks.indexOf(todo.id) !== -1}
                                        onChange={(e) => handleDone(todo.id, e.target.checked)} />
                                    <label className="cbx" htmlFor={todo.name}>
                                        <span>
                                            <svg width="12px" height="9px" >
                                                <polyline points="1 5 4 8 11 1"></polyline>
                                            </svg>
                                        </span>
                                        <span>{todo.name}</span></label>
                                    <div className="flex flex-row">
                                        <EditBtn id={todo.id} name={todo.name}/>
                                        <DelBtn id={todo.id} />
                                    </div>
                                </div>
                            ))
                }
            </div>
            <AddToDo />
        </>
    )
}

export default Doing