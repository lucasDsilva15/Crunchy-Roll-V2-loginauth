import { Button, IconButton } from "@mui/material"
import { useNavigate } from "react-router-dom"
import memberServices from "../Services/memberServices"
import StarOutlineIcon from '@mui/icons-material/StarOutline';


export default function ShowProduct ({product}) {
    const buttonSx = {
        backgroundColor:'#ff9100',
        '&:hover':{
            backgroundColor:'#f57c00'
        }
    }
    const navigate = useNavigate()
    const addProductToWishlist = async () => {
        try {
        const {_id, ...rest} = product
        const response = await memberServices.addToWishlist({...rest, quantity:1, productid: _id })
        console.log(response) 
        } catch (error) {
            alert(error.response.data.error)
            console.log(error)
        }
    }
    return(
        <div className="perproduct">
            <img id='product-image'src={product.image} height='400' onClick={() => navigate(`/product/${product._id}`)} alt={product.name}/><br/>
            <span className="productper">{product.name}</span><br/>
            <span className="priceper">${product.price}</span> <br/><br/>
            {product.quantity < 1 ? (
                <span className="outofstockoption">Out of stock</span>
            ): (
                <span className="instockoption"> In stock!</span>
            )}
             <br/><br/>
            <IconButton aria-label="Example" onClick={addProductToWishlist} >
                <StarOutlineIcon sx={{color: 'orange'}}/>
            </IconButton>
            <Button sx={buttonSx} variant='contained' onClick={() => navigate(`/product/${product._id}`)}> Buy </Button>
        </div>
    )
}
