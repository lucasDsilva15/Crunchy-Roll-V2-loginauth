import axios from 'axios'

const axiosauth = axios.create({
    baseURL: 'http://localhost:8080/auth/'
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