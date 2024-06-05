import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Swal from 'sweetalert2/dist/sweetalert2.js'

const AuthContext = createContext()
const baseURL = "http://school.hokimakademiyasi.uz/api/v1/teacher/login/"
export default AuthContext;

export const AuthProvider = ({ children }) => {
    const navigator = useNavigate();
    let [authTokens, setAuthTokens] = useState(() =>
        localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(() =>
        localStorage.getItem('user1') ? JSON.parse(localStorage.getItem('user1')) : null
    )

    let loginUser = async (username, password) => {

        let res = await axios.post(baseURL,
            { username: username, password: password }

        )
        if (res.data.success === true) {
            setAuthTokens(res.data.token)
            setUser(res.data.user)
            localStorage.setItem('authTokens', JSON.stringify(res.data.token))
            localStorage.setItem('user1', JSON.stringify(res.data.user))
            navigator("/dashboard")

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: res.data.error,
                confirmButtonText: 'Qaytadan urinish',

            })
        }
    }

    let logOutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        localStorage.removeItem('user1')
        navigator('/')
    }

    let contextData = {
        user: user,
        authTokens: authTokens,
        setAuthTokens: setAuthTokens,
        setUser: setUser,
        loginUser: loginUser,
        logOutUser: logOutUser
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}