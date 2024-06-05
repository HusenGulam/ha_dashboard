import axios from "axios";
import jwt_decode from 'jwt-decode';
import dayjs from 'dayjs'
import { useContext } from "react";
import AuthContext from "../context/AuthContext";


const baseURL = "http://school.hokimakademiyasi.uz/api/v1/teacher"

const useAxios = () => {
    let { authTokens, setUser, setAuthTokens, logOutUser } = useContext(AuthContext)
    const axiosInstance = axios.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authTokens?.access}`
        }
    })

    axiosInstance.interceptors.request.use(async req => {
        if (!authTokens) {
            authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null
            req.headers.Authorization = `Bearer ${authTokens?.access}`
        }

        const user = jwt_decode(authTokens.access)
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
        if (!isExpired) {
            return req
        }
        try {
            const response = await axios.post(`${baseURL}/token/refresh/`, { refresh: authTokens.refresh });

            localStorage.setItem('authTokens', JSON.stringify(response.data))

            if (response.status === 200) {
                localStorage.setItem('authTokens', JSON.stringify(response.data))
                setAuthTokens(response.data)
                req.headers.Authorization = `Bearer ${response.data?.access}`

            } else {
                logOutUser()
            }
        } catch (err) {
            logOutUser()
        }




        return req

    })

    return axiosInstance
}



export default useAxios