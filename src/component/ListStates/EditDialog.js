import React from 'react'
import { useState } from 'react';
import { editJob } from '../reducer/actions';
import useListContext from '../../context/hooks';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fff',
    borderRadius: '10px',
    boxShadow: 50,
    p: 4,
};





const Edit = ({ open, id, name, handleClose }) => {
    const [, dispatch] = useListContext();
    const [input, setInput] = useState(name);



    const handleEdit = () => {
        dispatch(editJob({ id, input }));
        handleClose();
        console.log(input)
    }
    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
            >
                <DialogContent
                >
                    <DialogContentText>
                        Edit task
                    </DialogContentText>
                    <TextField
                        autoFocus
                        value={input}
                        margin="dense"
                        id="name"
                        fullWidth
                        type="text"
                        variant="standard"
                        onChange={e => setInput(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleEdit}>Edit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Edit