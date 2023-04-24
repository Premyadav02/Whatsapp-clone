import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";

const MoreOption = ({setopenDrawer}) => {

    const [open, setOpen] = useState(null);

    const handleClose = () => {
        setOpen(null);
    }

    const handleClick = (e) => {
        setOpen(e.currentTarget);
    }
  return (
    <>
      <MoreVertIcon onClick ={handleClick} />
      <Menu
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorE1 = {null}
        anchorOrigin = {{
            vertical: 'bottom',
            horizontal: 'center'
        }}
        transformOrigin= {{
            vertical: 'top',
            horizontal: 'right'
        }}
      >
        <MenuItem onClick={ () => {handleClose(); setopenDrawer(true)}}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default MoreOption;
