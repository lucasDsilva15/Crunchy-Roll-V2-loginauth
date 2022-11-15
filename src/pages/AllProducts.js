import { useEffect } from "react"
import ShowProduct from "../components/ShowProduct"


export default function AllProducts ({setProducts, products, getallProducts}) {
    
    useEffect(()=> {
        getallProducts()
    }, [])
    return(
        <div>
            <h1>All products</h1>
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