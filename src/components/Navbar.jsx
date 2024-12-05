import { Link, Menu, MenuItem, AppBar, Box, Button, Switch, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.png'
const Navbar = ({ setMenu, menu }) => {
    const handleMenuToggle = () => {
        setMenu(!menu);
    };
    return (

        <AppBar>
            <Toolbar sx={{
                boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)'

            }}>
                <NavLink to='/'>
                    <img src={logo}
                        alt="logo ponytrack"
                        width={60}
                        height={60}
                    />
                </NavLink>
                <NavLink to='/'>
                    <Typography variant='h2' sx={{ color: 'black', fontFamily: 'sans-serif', fontWeight: 'bold' }}>
                        Ponytrack UDH
                    </Typography>
                </NavLink>
                <Box flex={1} />
                <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }}}>
                    <NavLink to='/testers' >
                        <Link>
                            <Button sx={{ width: { xl: 155, lg: 130 }, fontSize: { xl: 15, lg: 15 }, paddingLeft: 0, paddingRight: 0, backgroundColor: '#0ABB70', color: 'white'}}>
                                Testers
                            </Button>
                        </Link>
                    </NavLink>
                </Box>
                <Box sx={{ display: { xl: 'none', lg: 'none', md: 'block' } }}>
                    <MenuIcon onClick={handleMenuToggle} sx={{ color: 'black', marginLeft: 3, fontSize: 30, cursor: 'pointer' }} />
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar