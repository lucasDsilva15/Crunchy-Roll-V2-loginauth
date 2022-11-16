import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import userService from '../Services/userServices'
export default function Purchased () {

    const params = useParams()

    const [thisproduct, setthisProduct] = useState()

    const navigate = useNavigate()

    const buttonSx = {
        backgroundColor:'#ff9100',
        color: 'black',
        boxShadow: '10',
        '&:hover':{
            backgroundColor:'#f57c00',
            boxShadow: '15',
        }
    }

    const getProduct = async () => {
        try {
            const response = await userService.showProduct(params.id)
            setthisProduct(response.data.product)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getProduct()
        // eslint-disable-next-line
    }, [])
    return(
    thisproduct ? (
        <div id='purchasemaincontainer'>
                    <img src='https://freepngimg.com/thumb/anime/31318-2-hyouka-transparent.png' alt='Thank you' width='600' height='400' id='thankyouimg'></img>
                        <p id='thankyoumsg'>
                            Thank you for purchasing your {thisproduct.name}!
                        </p>
                        <Button sx={buttonSx} variant='contained' style={{paddingTop: '40px', paddingBottom: '40px', paddingLeft: '80px', paddingRight: '80px'}} onClick={()=> navigate(`/product/${thisproduct._id}`)}>Your Welcome</Button>
                        
                </div>
    ) : (
        <h1> Loading... </h1>
    )
)
}