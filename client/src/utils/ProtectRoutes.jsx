import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectRoutes = () => {
    const token = localStorage.getItem('token')
    if (!token) {
        return <Navigate to="/login" />
    }
    return (
        <div>
            <Outlet />
        </div>
    )
}


export default ProtectRoutes;