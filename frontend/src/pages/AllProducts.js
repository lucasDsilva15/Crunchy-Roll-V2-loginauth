import { useEffect } from "react"
import ShowProduct from "../components/ShowProduct"



export default function AllProducts ({setProducts, products, getallProducts}) {
    
    useEffect(()=> {
        getallProducts()
    }, [])
    return(
        <div>
            <div id='indexproducts'>
            {products ? (
                products.map((p) => {
                return <ShowProduct key={p._id} product={p}/>
            })
            
            ): (
                <h1> Loading... 1</h1>
            )}
            </div>
        </div>
    )
}