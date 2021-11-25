import axios from 'axios'
import config from '../config.json'

export default function api() {
    const api = axios.create({
        baseURL: config.SERVER_URL+'/public',
        withCredentials: true
        
    })

    return api
}