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

const addToWishlist = (product) => {
    return axiosUser().post('/addtowishlist', product)
}

const deleteWishListItem = (id) => {
    return axiosUser().delete(`/${id}/delete`)
}
const editWishListItem = (id, numb) => {
    return axiosUser().put(`/${id}/edit`, numb)
}

const services = {
    info,
    findWishlist,
    addToWishlist,
    deleteWishListItem,
    editWishListItem
}

export default services