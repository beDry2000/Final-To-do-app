import React from 'react'
import useListContext from '../../context/hooks'

const Removed = () => {

    const [state] = useListContext();
    const { todos } = state;
    const removedArr = todos.filter(({ removed }) => removed);

    return (
        <div className='flex flex-col gap-4 h-full overflow-auto'>
            {
                removedArr.length === 0 ?
                    <p className='text-center mt-[10%]'>There aren't any deleted tasks yet!</p>
                    : removedArr.map((todo, index) => (
                            <div key={index} className='text-[#333] line-through px-6 my-1 pb-2'>
                                <label htmlFor={todo.name}>{todo.name}</label>

                            </div>
                        ))
            }
        </div>
    )
}

export default Removed