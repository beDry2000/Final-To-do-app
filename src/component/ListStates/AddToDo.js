import React, { useState } from 'react';
import useListContext from '../../context/hooks';
import { setJob, addJob } from '../reducer/actions';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



const AddToDo = () => {
    const [hideInput, setHideInput] = useState(true);
    const [state, dispatch] = useListContext();
    const { todoInput } = state;
    const handleInput= () => {
        setHideInput(!hideInput);
    }
    const handleAdd = () => {
        if (todoInput.length > 0) {
            dispatch(addJob(todoInput));
            dispatch(setJob(''));
        }
    }

    return (
        <div className='mt-4 flex items-end gap-4 min-h-20 px-6 my-1'>
            <svg
                className='cursor-pointer'
                width="26" height="26" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                onClick={handleInput}
            >
                <circle cx="6" cy="6" r="5.5" stroke="#3c53c7" />
                <rect x="5.60001" y="3.2" width="0.8" height="5.6" rx="0.4" fill="#3c53c7" />
                <rect x="3.19998" y="6.39999" width="0.8" height="5.6" rx="0.4" transform="rotate(-90 3.19998 6.39999)" fill="#3c53c7" />
            </svg>
            {hideInput
                ? <div className='inline-block'>Create New Item</div>
                : (
                    <>
                        <Box

                            component="form"
                            sx={{
                                '& > :not(style)': { width: '40ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                autoFocus
                                label="Create New Item"
                                variant="standard"
                                value={todoInput}
                                onChange={e => dispatch(setJob(e.target.value))}
                                color="primary"
                            />
                        </Box>

                        <button onClick={e => handleAdd(e)}>Add</button>

                    </>
                )
            }
        </div>

    )
}

export default AddToDo;