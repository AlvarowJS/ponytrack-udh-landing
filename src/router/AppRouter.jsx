import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SideMenu from '../components/SideMenu'
import Footer from '../components/Footer'
import Home from '../pages/Home/Home'
import Tester from '../pages/Testers/Tester'

const AppRouter = () => {    
    const [menu, setMenu] = useState(false)
    return (
        <BrowserRouter>
            <Navbar
                menu={menu}
                setMenu={setMenu}
            />
            <SideMenu
                menu={menu}
                setMenu={setMenu}
            />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/testers' element={<Tester />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRouter