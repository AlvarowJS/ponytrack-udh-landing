import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'

const Politicas = () => {
    return (
        <Box sx={{ textAlign: 'center' }}>
            <Typography
                sx={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    marginTop: 3
                }}
            >Politicas de Privacidad</Typography>

            <Box
                
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    // marginX: 2,
                    paddingX: 2,
                    
                }}
            >                
                <Typography>
                    Descarga en aqui las politica de privacidad
                </Typography>

                <Button sx={{ background: '#B3FC9A' }} href="/politicas-privacidad.pdf" >
                    <i class='bx bxs-download'></i> Descargar aqui
                </Button>

            </Box>
        </Box>
    )
}

export default Politicas