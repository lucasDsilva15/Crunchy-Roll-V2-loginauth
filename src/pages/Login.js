import { Button } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import authServices from '../Services/authServices'
import memberServices from '../Services/memberServices'

export default function Login ({setUser}) {
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
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await authServices.login(form)
            console.log(response)
            localStorage.setItem("token", response.data.token)
            const user = await memberServices.info()
            
            console.log(user)
            
           
            setUser(user.data)
            navigate('/profile') 

        } catch (error) {
            console.log(error)
            alert(error.response.data.error)
        }
        
    }

    return(
        <div className="loginreg">
            <h1>Login</h1>
            <br/>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <br />
                <input 
                    type="text" 
                    id="username"
                    name="username"
                    onChange={handleChange}
                    value={form.username}
                />
                <br /><br />
                <label htmlFor="password">Password:</label>
                <br />
                <input 
                    type="password" 
                    id="password"
                    name="password"
                    onChange={handleChange}
                    value={form.password}
                />
                <br /><br />
                <Button sx={buttonSx} size='large' id='loginregbtn' type='submit' value='Submit'> Submit </Button>
            </form>
        </div>
    )
}