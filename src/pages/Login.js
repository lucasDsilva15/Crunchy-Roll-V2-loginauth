import { useState } from "react"
import { useNavigate } from "react-router-dom"
import authServices from '../Services/authServices'
import memberServices from '../Services/memberServices'

export default function Login ({setUser}) {
    const navigate = useNavigate()

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
        <div>
            <h1>Login</h1>
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
                <button>Submit</button>
            </form>
        </div>
    )
}