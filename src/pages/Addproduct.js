
import { Button, TextField } from "@mui/material"
import { Box } from "@mui/system"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import devService from '../Services/developerServices'

export default function Addproduct () {

    const buttonSx = {
        backgroundColor:'#ff9100',
        color: 'black',
        boxShadow: '10',
        '&:hover':{
            backgroundColor:'#f57c00',
            boxShadow: '15',
        }
    }

    const navigate = useNavigate()
       
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
        const data = await devService.add(newProduct)
        console.log(data)
        navigate('/allproducts')

    } catch (error) {
        console.error(error)
    }
        }
        console.log(values)
    return(
        <div>
            <h1>Add A Product</h1>
            <Box component='form'
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="on"
              onSubmit={handleSubmit}>
                <div>
                    <TextField required id='outlined-required' label='Product Name' inputRef={ref => values.current.name = ref}/>
                </div>

                <div>
                    <TextField required id='outlined-required' label='Description' multiline maxRows={5} inputRef={ref => values.current.description = ref}/>
                </div>

                <div>
                    <TextField required id='outlined-required' label='Product Image' multiline maxRows={3} inputRef={ref => values.current.image = ref}/>
                </div>

                <div>
                    <TextField required id='outlined-required' label='Category'  inputRef={ref => values.current.category = ref}/>
                </div>

                <div>
                    <TextField required id='outlined-required' label='Price' type='number' inputRef={ref => values.current.price = ref}/>
                </div>

                <div>
                    <TextField required id='outlined-required' label='Stock' type='number' inputRef={ref => values.current.quantity = ref}/>
                </div>
                <div>
                    <Button variant='contained' type='submit' sx={buttonSx}> Submit </Button>
                </div>
            </Box>
        </div>
    )
}