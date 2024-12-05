import React from 'react'
import './App.css'; // Importa el archivo CSS
import logo from './assets/logo.png'
import portada from './assets/portada.png'
import { ThemeProvider } from '@emotion/react'
import { lightTheme } from './themes'
import AppRouter from './router/AppRouter';
const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <AppRouter />
    </ThemeProvider>
  )
}

export default App
