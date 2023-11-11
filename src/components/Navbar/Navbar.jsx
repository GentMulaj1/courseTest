import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const[close, setClose] = useState(false)

  const handleClose = () => {
    setClose(!close);
  }

  return (
    <nav className='Navbar'>
      {
        close 
        ?
        <CloseIcon className='hideInBigScreen' onClick={handleClose} /> 
        :
        <MenuIcon className='hideInBigScreen' onClick={handleClose}/>
      }    

        <div onClick={handleClose} className={`navbar__right ${close ? 'open' : "hide"}`}>
            <Link to='/' >Home</Link>
            <Link to='/aboutus' >About</Link>
            <Link to='/contact' >Contact</Link>
        </div>


    </nav>
  )
}

export default Navbar