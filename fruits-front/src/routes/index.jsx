import React from 'react'
import Produtos from '../pages/produtos'
import Home from '../pages/home'
import { Route, Routes, BrowserRouter } from "react-router-dom"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Home/>} />
                <Route path='/produtos' element={<Produtos/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes