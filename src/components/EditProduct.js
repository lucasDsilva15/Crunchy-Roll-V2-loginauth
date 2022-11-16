import { Button, TextField } from "@mui/material"
import { Box } from "@mui/system"
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
            <Box component='form'
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="on"
              onSubmit={handleSubmit}>
                <div>
                    <TextField required id='outlined-required' label='Product Name' defaultValue={product.name} inputRef={ref => values.current.name = ref}/>
                </div>

                <div>
                    <TextField required id='outlined-required' label='Description' multiline maxRows={5}  defaultValue={product.description} inputRef={ref => values.current.description = ref}/>
                </div>

                <div>
                    <TextField required id='outlined-required' label='Product Image' multiline maxRows={3} defaultValue={product.image} inputRef={ref => values.current.image = ref}/>
                </div>

                <div>
                    <TextField required id='outlined-required' label='Category'  defaultValue={product.category} inputRef={ref => values.current.category = ref}/>
                </div>

                <div>
                    <TextField required id='outlined-required' label='Price' type='number' defaultValue={product.price} inputRef={ref => values.current.price = ref}/>
                </div>

                <div>
                    <TextField required id='outlined-required' label='Stock' type='number' defaultValue={product.quantity} inputRef={ref => values.current.quantity = ref}/>
                </div>
                <div>
                    <Button variant='contained' color='success'type='submit' value='Submit' className='submitbtn'>Submit </Button>
                </div>
            </Box>
        </div>
        
    )
}