import axios from 'axios'

const getToken = () => {
    let token = localStorage.getItem('token')

    return token ? token : ''
}

const axiosUser = () => axios.create({
    baseURL: 'http://localhost:8080/members',
    headers: {
        'Authorization': `Bearer ${getToken()}`
    }
})

const info = () => {
    return axiosUser().get('/info')
}

const findWishlist = () => {
    return axiosUser().get('/wishlistindex')
}

const addToWishlist = () => {
    return axiosUser().post('/addtowishlist')
}

const services = {
    info,
    findWishlist,
    addToWishlist
}

export default services