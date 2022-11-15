import { useNavigate } from "react-router-dom"
import memberServices from "../Services/memberServices"

export default function ShowProduct ({product}) {
    const navigate = useNavigate()
    const addProductToWishlist = async () => {
       const {_id, ...rest} = product
        const response = await memberServices.addToWishlist({...rest, quantity:1, productid: _id })
        console.log(response)
    }
    return(
        <div className="perproduct">
            <img src={product.image} height='400' alt={product.name}/><br/>
            product: {product.name}
            {product.price} <br/>
            qty: {product.quantity} <br/>
            <button onClick={addProductToWishlist}> Add To Wishlist</button>
            <button onClick={() => navigate(`/product/${product._id}`)}> Buy </button>
        </div>
    )
}