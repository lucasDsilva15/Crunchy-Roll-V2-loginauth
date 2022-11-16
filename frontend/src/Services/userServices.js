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
const purchaseProduct = (id) => {
    return axiosUser().put(`/${id}/purchase`)
}

const services = {
    allProducts,
    showProduct,
    purchaseProduct
}

export default services