import { useEffect, useState } from "react"
import userService from '../Services/userServices'
import devService from '../Services/developerServices'
import { useNavigate } from "react-router-dom"
import EditProduct from "../components/EditProduct"

export default function Productpage ({developer}) {
    const navigate = useNavigate()
    const [product, setProducts] = useState()
    
    const deleteProduct = async () => {
        try {
            const response = await devService.deleteP()
            console.log(response)
            navigate('/allproducts')
        } catch (error) {
            console.log(error)
        }
    }

    const getProduct = async () => {
        try {
            const response = await userService.showProduct()
            setProducts(response.data.product)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=> {
        getProduct()
    }, [])
    return (
        product ? (
            <div>
            <h1> {product.name} </h1>
            <img src={product.image} alt={product.name} height='400' width='350'/><br/>
            {product.description}<br/>
            <button> Add to cart </button>
            {developer === true && (
                <div>
                    <button onClick={deleteProduct}> Delete</button>
                    <EditProduct/>
                </div>
            )}
            
        </div>
        ) : (
            <div>
                <h1> Loading... </h1>
            </div>
        )
        
        

    )
}