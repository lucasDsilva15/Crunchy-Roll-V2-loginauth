import { useEffect, useState } from "react"
import memberServices from '../Services/memberServices'

export default function Wishlist ({user}) {

    const [wishList, setWishlist] = useState()
    const retrieveWishlist = async () => {
        try {
            const response = await memberServices.findWishlist()
            console.log(response)
            setWishlist(response.data.userWishlist) 
        } catch (error) {
            console.log(error)
        }
        
    }
    useEffect(() => {
        retrieveWishlist()
    }, [])
    console.log(wishList)
    return(
        <div>
            <h1>Wishlist </h1>
            {wishList ? (
                <div>
                    <h1> It worked</h1>
                </div>
            ) : (
                <div>
                    <h1> Loading </h1>
                </div>
            )}
        </div>
    )
}
    
    