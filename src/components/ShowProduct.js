import { useNavigate } from "react-router-dom"

export default function ShowProduct ({product}) {
    const navigate = useNavigate()
    return(
        <div>
            <img src={product.image} height='300' width='300' alt={product.name}/><br/>
            product: {product.name}
            {product.price} <br/>
            qty: {product.quantity} <br/>
            <button onClick={() => navigate(`/product/${product._id}`)}> Buy </button>
        </div>
    )
}