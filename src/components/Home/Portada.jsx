import { Box, Typography } from '@mui/material'
import React from 'react'
import portada from '../../assets/portada.png'
const Portada = () => {
    return (
        <Box
            useFlexGap
            direction="row"
            sx={{
                display: "flex",
                gap: 4,
                justifyContent: 'center',
                paddingX: { xs: 5, md: 10, lg: 40 },
                alignItems: 'center'
            }}
        >
            <Box>
                <Typography variant='h2' sx={{
                    fontSize: 50,
                    fontWeight: 'bold'
                }}>
                    Sigue el bus en tiempo real
                </Typography>
                <Typography variant='h2' sx={{
                    fontSize: 20,
                    marginRight: { xs: 0, md: 20 }
                }}>
                    ✅  Con nuestra app, organiza tu tiempo.

                </Typography>
                <Typography sx={{
                    fontSize: 20,
                    marginRight: { xs: 0, md: 20 }
                }}>
                    ✅ Obtén actualizaciones en tiempo real sobre la ubicación de tu transporte.
                </Typography>
                <Typography sx={{
                    fontSize: 20,
                    marginRight: { xs: 0, md: 20 }
                }}>
                    ✅ Solo para estudiantes de la UDH
                </Typography>
                <Typography
                 sx={{ fontWeight: 'bold', marginY: 2}}
                 >
                    Pronto para:
                </Typography>
                <Box sx={{
                    display: 'flex',
                    gap: 2,
                    marginTop: 2
                }}>


                    <Box sx={{ backgroundColor: '#424649', color: 'white', borderRadius: 2, padding: 1 }}>
                        <Typography>

                            <i class='bx bxl-apple' ></i> App store
                        </Typography>
                    </Box>
                    <Box sx={{ backgroundColor: '#424649', color: 'white', borderRadius: 2, padding: 1 }}>
                        <Typography>
                            <i class='bx bxl-play-store'></i> Play Store
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    // display: 'inline-block',
                    // borderRadius: '16px',
                    // boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                    // overflow: 'hidden',
                    width: '300px',
                    // height: '360px',
                    display: { xs: 'none', md: 'inline-block' },
                }}
            >
                <img
                    src={portada}
                    style={{
                        display: 'block',
                        width: '100%',
                        height: 'auto',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                        borderRadius: '16px',
                    }}
                />
            </Box>
        </Box>
    )
}

export default Portada