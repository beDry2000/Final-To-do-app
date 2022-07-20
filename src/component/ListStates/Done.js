import React from 'react';
import useListContext from '../../context/hooks';

const Done = () => {
    const [state] = useListContext();
    const { todos } = state;


    return (
        <div id="list-completed-jobs" className='flex flex-col gap-4'>
            {
                todos
                    .filter(({ completed, removed }) => completed && !removed)
                    .map((todo, index) => (
                        <div key={index}>

                            <input className="inp-cbx" id={todo.name} type="checkbox" style={{ display: "none" }} checked/>
                            <label className="cbx" htmlFor={todo.name}><span>
                                <svg width="12px" height="9px" >
                                    <polyline points="1 5 4 8 11 1"></polyline>
                                </svg></span><span>{todo.name}</span></label>
                        </div>
                    ))
            }
        </div>
    )
}

export default Done