import React from 'react'
import {Stack} from '@mui/material'
import {Link} from 'react-router-dom'
import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack direction="row" sx={{gap:{lg:'1200px' ,sm:'122px' , xs:'40px'}}} alignItems="center" boxShadow={5}  px="20px" className="nav-color">
        <Link to="/">
        <img src={Logo} alt="logo" style={{width:"40px",height:"40px"}} />
        </Link>
        <Stack direction="row" gap="50px"  alignItems="center">
            <Link to="/" className="your-custom-class">
                HOME
            </Link>
            <a href="#exercises" className="your-custom-class"> EXERCISES </a>
        </Stack>
    </Stack>
  )
}

export default Navbar