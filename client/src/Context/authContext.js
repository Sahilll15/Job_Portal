import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'


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
                toast.success("Registration Successful");
            } else {
                const error = await response.json();
                toast.error(error.msg);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const login = async (email, password) => {
        try {
            const response = await fetch('http://localhost:8000/api/v1/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                localStorage.setItem('token', data.token);
                toast.success("Login Successful");
            } else {
                const error = await response.json();
                console.log(error);
                toast.error(error.msg);
            }

        } catch (error) {
            console.log(error);
        }
    }


    const contextValue = {
        register,
        login
    }

    return (
        <authContext.Provider value={contextValue}>
            {children}
        </authContext.Provider>

    )
}