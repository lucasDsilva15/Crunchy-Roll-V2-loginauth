import { useNavigate } from "react-router-dom"
import memberServices from "../Services/memberServices"

export default function ShowProduct ({product}) {
    const navigate = useNavigate()
    const addProductToWishlist = async () => {
        const response = await memberServices.addToWishlist(product)
    }
    return(
        <div>
            <img src={product.image} height='300' width='300' alt={product.name}/><br/>
            product: {product.name}
            {product.price} <br/>
            qty: {product.quantity} <br/>
            <button onClick={addProductToWishlist}> Add To Wishlist</button>
            <button onClick={() => navigate(`/product/${product._id}`)}> Buy </button>
        </div>
    )
}