import axios from 'axios'

const axiosUser = () => axios.create({
    baseURL: 'http://localhost:8080/user'
})

const allProducts = () => {
   return axiosUser().get('/index')
}

const showProduct = (id) => {
    return axiosUser().get(`/${id}/show`)
}

const services = {
    allProducts,
    showProduct
}

export default services