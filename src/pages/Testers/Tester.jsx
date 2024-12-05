import { Label } from '@mui/icons-material'
import { Box, Button, FormControl, Input, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import apiFacus from '../../api/apiFacus'
import Select from 'react-select'

const Tester = () => {

    const [carrerasData, setCarrerasData] = useState()

    const descargarAndroid = () => {
        window.open('https://play.google.com/store/apps/details?id=com.alvarojapa.busudh', '_blank');
      }
    
    useEffect(() => {
        const carreras = []
        apiFacus.map(facu => {
            facu.carreras.map(carrera => {
                carreras.push(
                    {
                        value: facu.nombre + ' - ' + carrera.nombre_carrera,
                        label: facu.nombre + ' - ' + carrera.nombre_carrera
                    }

                )
            })
        })
        setCarrerasData(carreras)
    }, [])

    return (
        <Box sx={{ marginTop: 20, textAlign: 'center' }}>
            <Typography variant='h1' sx={{ marginX: 3, marginBottom: 3 }}>¡Unete y se parte de los primeros usuarios!</Typography>
            <Box sx={{

                display: "flex",
                gap: 4,
                justifyContent: 'center',
                paddingX: { xs: 5, md: 10, lg: 40 },
                alignItems: 'center',
                flexWrap: { xs: 'wrap', md: 'nowrap' }
            }}>
                <Box sx={{ textAlign: 'left', width: 440 }}>

                    <Typography variant='h2'>Ingresa los siguientes datos y luego descarga la app de prueba cerrada, no olvides regitrarte con tu cuenta institucional y aceptar los permisos que solicita la aplicación</Typography>
                    <Typography variant='h2'>Una vez registrado en unos días podra decargar la aplicación en modo prueba</Typography>
                    <Button onClick={descargarAndroid}>Descargar app prueba</Button>
                </Box>
                <Box sx={{ textAlign: 'left' }}>
                    <form>
                        <Typography variant='h2' mb={2}>Tus datos:</Typography>
                        <TextField
                            fullWidth
                            label="Correo electronico"
                            name="mail"
                            placeholder='Ingrese el correo que usa en play store'
                            sx={{ marginBottom: 2 }}
                        />
                        <TextField
                            fullWidth
                            label="Nombre"
                            name="mail"
                            placeholder='Ingrese el correo que usa en play store'
                            sx={{ marginBottom: 2 }}
                        />
                        <Select 
                        placeholder= 'seleccione su carrera'
                        options={carrerasData} 
                        />

                        <Button color='primary'>Enviar</Button>
                    </form>
                </Box>
            </Box>
        </Box>
    )
}

export default Tester