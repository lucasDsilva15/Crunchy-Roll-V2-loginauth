import { useEffect, useState } from "react"
import WishListItem from "../components/WishListItem"
import memberServices from '../Services/memberServices'

export default function Wishlist ({user}) {

    const [wishList, setWishlist] = useState()
    const retrieveWishlist = async () => {
        try {
            const response = await memberServices.findWishlist(user.name)
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
            {wishList ? (
                <div>
                    {wishList.map((w) => {
                        return(
                            <div key={w._id}>
                                <WishListItem item={w} retrieveWishlist={retrieveWishlist}/>
                            </div>
                        )
                    })}
                </div>
            ) : (
                <div>
                    <h1> Loading </h1>
                </div>
            )}
        </div>
    )
}
    
    