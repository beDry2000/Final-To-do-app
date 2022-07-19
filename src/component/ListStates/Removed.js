import React from 'react'
import useListContext from '../../context/hooks'

const Removed = () => {

    const [state] = useListContext();
    const { todos } = state;
    return (
        <div id="list-removed-jobs" className='flex flex-col gap-4'>
            {
                todos
                    .filter(({ removed }) => removed)
                    .map((todo, index) => (
                        <div key={index} className='my-auto text-[#333] line-through'>
                            <label htmlFor={todo.name}>{todo.name}</label>

                        </div>
                    ))
            }
        </div>
    )
}

export default Removed