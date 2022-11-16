import axios from 'axios'
import baseURL from './baseUrl'

const axiosauth = axios.create({
    baseURL: baseURL + '/auth'

})

const login = (userCredentials) => {
    return axiosauth.post ('/login', userCredentials)
}

const register = (userCredentials) => {
    return axiosauth.post('/register', userCredentials)
}

const services = {
    login,
    register
}

export default services