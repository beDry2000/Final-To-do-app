import React from 'react'
import useListContext from '../../context/hooks';
import { checkJob } from '../reducer/actions';
import AddToDo from './AddToDo'
import DelBtn from './DelBtn';
import { Backdrop, CircularProgress } from '@mui/material';

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

    return (
        <>
            <Backdrop
                sx={{
                    position: 'absolute',
                    color: '#fff',
                    zIndex: (theme) => theme.zIndex.drawer - 1 
                }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <div id="list-doing-jobs" className='relative flex flex-col gap-4'>

                {
                    todos
                        .filter(({ completed, removed }) => !completed && !removed)
                        .map((todo, index) => (
                            <div key={index} className='flex justify-between hover:shadow-lg px-6 my-1 pb-2 rounded-lg'>

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
                                <DelBtn id={todo.id} />

                            </div>
                        ))
                }
            </div>
            <AddToDo />
        </>
    )
}

export default Doing