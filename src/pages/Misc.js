import { useEffect } from "react"
import ShowProduct from "../components/ShowProduct"

export default function Misc ({products, getallProducts}) {


    useEffect(()=> {
        getallProducts()
        // eslint-disable-next-line
    }, [])
       
    
    
    return(
        <div>
            <div id='indexproducts'>
            {products ? (
                products.filter(p => p.category === 'misc.').map((p) => {
                return <ShowProduct key={p._id} product={p}/>
            })
            
            ): (
                <h1> Loading... </h1>
            )}
            </div>
        </div>
    )
}