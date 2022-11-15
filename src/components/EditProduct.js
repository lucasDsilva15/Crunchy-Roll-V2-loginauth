import { Button } from "@mui/material"
import { useRef } from "react"
import devServices from '../Services/developerServices'

export default function EditProduct ({product}) {
    const values = useRef({})
    const handleSubmit = async () => {
        const editedProduct = {
            name: values.current.name.value,
            description: values.current.description.value,
            image: values.current.image.value,
            category: values.current.category.value,
            price: values.current.price.value,
            quantity: values.current.quantity.value
        }
        try {
            const response = await devServices.edit(product._id, editedProduct)
            console.log(response)
            
        } catch (error) {
          console.log(error)  
        }
    }
    return(
        <div>
            <h1>Edit Product information</h1>
            <form onSubmit={handleSubmit}>
                    <label htmlFor='name'>Product Name: </label>
                    <input type='text' id='name' name='name' defaultValue={product.name}ref={ref => values.current.name = ref}/> <br/>
                    
                    <label htmlFor='description'>Product Description: </label>
                    <input type='textarea' id='productdescription' name='productdescription' defaultValue={product.description} ref={ref => values.current.description = ref}/><br/>
                    
                    <label htmlFor='productimage'>Product Image: </label>
                    <input type='text' id='productimage' name='productimage' defaultValue={product.image} ref={ref => values.current.image = ref}/><br/>

                    <label htmlFor="category">Product Category: </label>
                    <input type='text' id='category' name='category' defaultValue={product.category} ref={ref => values.current.category = ref}/><br/>
                    
                    <label htmlFor='price'>Price: </label>
                    <input type='number' step='0.01' id='price' name='price' defaultValue={product.price}ref={ref => values.current.price = ref}/><br/>

                    <label htmlFor='quantity'>Quantity: </label>
                    <input type='number' id='quantity' name='quantity' defaultValue={product.quantity} ref={ref => values.current.quantity = ref}/><br/>
                
                    <Button variant='contained' color='success'type='submit' value='Submit' className='submitbtn'>Submit </Button>
                </form>
        </div>
        
    )
}