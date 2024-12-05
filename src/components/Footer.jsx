import { AppBar, Box, Container, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'
const Footer = () => {
    return (
        <footer>
            <Box sx={{
                backgroundColor: '#27292E', color: 'white', marginTop: 10, boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
                paddingBottom: 5,
                paddingTop: 5,
                textAlign: 'center'
            }}>
                <Typography>
                    Hecho con 💚 por Alvaro Japa Salazar
                </Typography>
                <Typography>
                    © 2024 Ponytrack UDH | Todos los derechos reservados
                </Typography>
                <Typography>
                    Contacto: jalvarojs123@gmail.com
                </Typography>



            </Box>
        </footer>
    )
}

export default Footer