import axios from "axios"
import { useRef } from "react"

export default function Addproduct () {
    
        let values = useRef({})
    const handleSubmit = async(e) => {
        e.preventDefault()
       let newProduct = {
            name: values.current.name.value,
            description: values.current.description.value,
            image: values.current.image.value,
            category: values.current.category.value,
            price: values.current.price.value,
            quantity: values.current.quantity.value

        }
    try {
        const data = await axios.post('http://localhost:8080/developer/add', newProduct)
        console.log(data)

    } catch (error) {
        console.error(error)
    }
        }
        console.log(values)
    return(
        <div>
             <form onSubmit={handleSubmit}>
                    <label htmlFor='name'>Product Name: </label>
                    <input type='text' id='name' name='name' ref={ref => values.current.name = ref}/> <br/>
                    
                    <label htmlFor='description'>Product Description: </label>
                    <input type='textarea' id='productdescription' name='productdescription' ref={ref => values.current.description = ref}/><br/>
                    
                    <label htmlFor='productimage'>Product Image: </label>
                    <input type='text' id='productimage' name='productimage' ref={ref => values.current.image = ref}/><br/>

                    <label htmlFor="category">Product Category: </label>
                    <input type='text' id='category' name='category' ref={ref => values.current.category = ref}/><br/>
                    
                    <label htmlFor='price'>Price: </label>
                    <input type='number' step='0.01' id='price' name='price' ref={ref => values.current.price = ref}/><br/>

                    <label htmlFor='quantity'>Quantity: </label>
                    <input type='number' id='quantity' name='quantity' ref={ref => values.current.quantity = ref}/><br/>
                
                    <input type='submit' value='Submit' className='submitbtn'/>
                </form>
        </div>
    )
}