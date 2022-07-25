import { useEffect, useState } from 'react';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import useListContext, { useTheme } from '../../context/hooks';
import { filJob } from '../reducer/actions';


function ListMenu() {
  const {light} = useTheme();
  const [state, dispatch] = useListContext();
  useEffect(() => {
    dispatch(filJob(options[0]));
  }, []);

  const options = ['In Progress', 'Completed', 'Removed'];

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => { setAnchorEl(e.currentTarget) };
  const handleClose = () => { setAnchorEl(null) };
  const handleKeepSelected = ((_, index) => {
    setAnchorEl(null);
    dispatch(filJob(options[index]));
  })


  return (

    <div>
      <IconButton
        sx={{ ml: 2, 
        color: light ? '' : '#fff'
        }}
        id="basic-button"
        aria-controls={open ? "basci-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreHorizIcon size="large" />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {
          options.map((option, index) => (
            <MenuItem
              key={option}
              selected={option === state.filtered}
              onClick={e => handleKeepSelected(e, index)}
            >
              {option}

            </MenuItem>

          ))
        }
      </Menu>
    </div>
  )
}

export default ListMenu;