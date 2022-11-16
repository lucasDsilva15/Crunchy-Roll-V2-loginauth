import { Button, TextField } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import authServices from '../Services/authServices'
import userServices from '../Services/memberServices'


export default function Register ({setUser}) {
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

    let [form, setForm] = useState({
        username:'',
        password: '',
        email: '',
        developer: false
    })

    const handleChange = (e) => {
        setForm ({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(form)
        try {
            const response = await authServices.register(form)
            console.log('response ' + response)
            localStorage.setItem('token', response.data.token)

            const user = await userServices.info()
            console.log(user)
            setUser(user.data)
            navigate('/profile')
        } catch (error) {
            console.log(error.response.data.error)
        }

    }
    return(
        <div className="loginreg">
            <h1>Register</h1>
            <Box component='form'
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="on"
              onSubmit={handleSubmit}>
                <div>
                    <TextField required id='outlined-required username' name='username' label='User Name' value={form.username} onChange={handleChange}/>
                </div>
                <div>
                    <TextField required id='outlined-required email' name='email' label='E-Mail' value={form.email} onChange={handleChange}/>
                </div>
                <div>
                    <TextField required id='outlined-required password' name='password' label='Password' type='password' value={form.password} onChange={handleChange}/>
                </div>
            <br/><br/>
                <Button sx={buttonSx} size='large' type='submit' id='loginregbtn'>
                            Submit
                        </Button>
            
            </Box>
        </div> 
    )
    
}