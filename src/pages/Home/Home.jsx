import { Box } from '@mui/material'
import React from 'react'
import Portada from '../../components/Home/Portada'
import Caracteristicas from '../../components/Home/Caracteristicas'
import Politicas from '../../components/Home/Politicas'

const Home = () => {
  return (
    <Box marginTop={12}>
      <Portada />
      <Caracteristicas />
      <Politicas />
    </Box>
  )
}

export default Home