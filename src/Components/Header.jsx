import React from 'react'
import { useSelector } from 'react-redux'
import { userLogin } from '../slices/userSlice'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import img from  "../images/hand.png"
import "./header.scss"
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  function goHomePage() {
    navigate("/");
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const user = useSelector(userLogin)
  console.log(user,"user");
  return (
    <div>
      <div className="header">
        <div className="logo">
        <img src={img} alt="" />
        <h2>Slider Club</h2>
        </div>
        <div className="user">
          <h3>{user.name}</h3>
          <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
         <img src={`${user.imageUrl}`} alt="" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={goHomePage}>Logout</MenuItem>
      </Menu>
    </div>
        </div>
      </div>
    </div>
  )
}


