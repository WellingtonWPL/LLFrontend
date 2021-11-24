import axios from 'axios'
import config from '../config.json'
//import {logOut} from '@/util/auth'

export default function api() {
    const api = axios.create({
        baseURL: config.SERVER_URL+'/public',
        withCredentials: true
    })

    // api.interceptors.response.use(response => response, error => {
    //     if (error.response.status === 401) {
    //         console.log('LOGOUT')

    //         return Promise.reject()
    //     }

    //     return Promise.reject(error)
    // })

    return api
}