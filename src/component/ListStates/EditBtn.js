
import Edit from './EditDialog';
import {useState} from 'react';

import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';




const EditBtn = ({ id,name }) => {

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    return (
        <div>   

            <Tooltip title="Edit">
                <IconButton
                    aria-label="edit"
                    size="lg"
                    onClick={() => setOpen(true)}
                >
                    <EditIcon />
                </IconButton>
            </Tooltip>
           {
                open && <Edit open={open} id={id} name={name} handleClose={handleClose}/>
           }
        </div>
    );
}

export default EditBtn;