import { useEffect } from "react"
import ShowProduct from "../components/ShowProduct"



export default function AllProducts ({setProducts, products, getallProducts}) {
    
    useEffect(()=> {
        getallProducts()
        // eslint-disable-next-line
    }, [])
    return(
        <div>
            <div id='indexproducts'>
            {products ? (
                products.map((p) => {
                return <ShowProduct key={p._id} product={p}/>
            })
            
            ): (
                <h1> Loading... </h1>
            )}
            </div>
        </div>
    )
}