import React from 'react';
import useListContext from '../../context/hooks';

const Done = () => {
    const [state] = useListContext();
    const { todos } = state;
    const doneArr = todos.filter(({ completed, removed }) => completed && !removed)


    return (
        <div id="list-completed-jobs" className='flex flex-col gap-4 h-full overflow-auto'>
            {

                doneArr.length === 0 ?
                    <p className='text-center mt-[10%]'><i>There aren't any completed tasks yet!</i></p>
                    :
                    doneArr.map((todo, index) => (
                        <div key={index} className='flex px-6 my-1 pb-2 mt-3'>

                            <input className="inp-cbx" id={todo.name} type="checkbox" style={{ display: "none" }} checked />
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