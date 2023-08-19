import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


const authContext = createContext();

export const useAuth = () => useContext(authContext);

export const AuthProvider = ({ children }) => {

    const register = async (userData) => {
        try {
            const formData = new FormData();

            for (const field in userData) {
                formData.append(field, userData[field]);
                console.log(field)
            }

            console.log(formData)

            const response = await fetch(`http://localhost:8000/api/v1/user/register`, {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
            } else {
                const error = await response.json();
                console.log(error);
            }
        } catch (error) {
            console.log(error);
        }
    };


    const contextValue = {
        register
    }

    return (
        <authContext.Provider value={contextValue}>
            {children}
        </authContext.Provider>

    )
}