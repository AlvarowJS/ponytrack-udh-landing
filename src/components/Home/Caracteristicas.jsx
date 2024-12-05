import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Caracteristicas = () => {
    return (
        <Box sx={{ textAlign: 'center', marginTop: 10 }}>
            <Typography
                sx={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    marginTop: 3
                }}
            >¿Que Ofrece?</Typography>

            <Grid
                container
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    // marginX: 2,                    
                    paddingX: 2,
                    marginY: 3
                }}
            >

                <Grid item xs={12} sm={6} md={3}
                    sx={{
                        backgroundColor: '#B3FC9A',
                        borderRadius: 4,
                        height: 200,
                        alignContent: 'center',
                        padding: 2
                    }}
                >
                    <Typography sx={{
                        fontWeight: 'bold',
                        fontSize: 20
                    }}>Rastreo en tiempo real 📍</Typography>
                    <Typography>
                        Consulta la ubicación exacta de tu bus en todo momento.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}
                    sx={{
                        backgroundColor: '#B3FC9A',
                        borderRadius: 4,
                        height: 200,
                        alignContent: 'center',
                        marginX: 2,
                        marginY: 2,
                        padding: 2
                    }}
                >
                    <Typography sx={{
                        fontWeight: 'bold',
                        fontSize: 20
                    }}>Exclusivo 👨🏼‍🎓</Typography>
                    <Typography>
                    Esta app es exclusiva para los estudiantes de la Universidad de Huánuco que tengan acceso a su correo institucional <b>(@udh.edu.pe)</b>.                        
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}
                    sx={{
                        backgroundColor: '#B3FC9A',
                        borderRadius: 4,
                        height: 200,
                        padding: 2,
                        alignContent: 'center'
                    }}>
                    <Typography sx={{
                        fontWeight: 'bold',
                        fontSize: 20
                    }}>Mapa interactivo 🗺️</Typography>
                    <Typography>
                        Visualiza la ruta y el progreso de los buses en un mapa interactivo.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Caracteristicas