import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Box, Button, Drawer, IconButton, Input, InputAdornment, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Collapse } from "@mui/material"
const SideMenu = ({ menu, setMenu}) => {
    const [subMenuOpen, setSubMenuOpen] = useState(false);    
    const handleBackdropClick = () => {
        setMenu(false);
    };    
    return (
        <Drawer
            open={menu}
            anchor='right'
            sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
            ModalProps={{
                onBackdropClick: handleBackdropClick,
            }}
        >
            <Box sx={{ width: 250, paddingTop: 5 }}>

                <List>
             
                    <NavLink to='/' onClick={handleBackdropClick}>
                        <ListItem button>
                            <ListItemText primary={'Inicio'} />
                        </ListItem>
                    </NavLink>
                                                         
                    <NavLink to='/Testers' onClick={handleBackdropClick}>
                        <ListItem button>
                            <ListItemText primary={'Testers'} />
                        </ListItem>
                    </NavLink>                 
                </List>

            </Box>
        </Drawer>
    )
}

export default SideMenu