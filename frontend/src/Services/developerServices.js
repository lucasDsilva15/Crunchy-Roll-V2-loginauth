import axios from 'axios'

const getToken = () => {
    let token = localStorage.getItem('token')

    return token ? token : ""
}
const axiosdev = () => axios.create({
    baseURL: 'http://localhost:8080/developer',
    headers: {
        'Authorization': `Bearer ${getToken()}`
    }
})

const add = (newProduct) => {
    return axiosdev().post('/add', newProduct)
}

const deleteP = (id) => {
    return axiosdev().delete(`/${id}/delete`)
}

const edit = (id, editedProduct) => {
    return axiosdev().put(`/${id}/edit`, editedProduct)
}

const services = {
    add,
    deleteP,
    edit,
}

export default services