import { useState } from "react"
import { useNavigate } from "react-router-dom"
import authServices from '../Services/authServices'
import userServices from '../Services/memberServices'


export default function Register ({setUser}) {
    const navigate = useNavigate()

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
        <div>
            <h1>Register</h1>
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
                <label htmlFor="email">Email:</label>
                <br />
                <input 
                    type="email" 
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={form.email}
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
                <label htmlFor="developer"> Developer: </label>
                <input 
                    type='checkbox'
                    id='developer'
                    name='developer'
                    onChange={()=> setForm({...form, developer: !form.developer})}
                    value={form.developer}
                    />
                <br /><br />
                <button>Submit</button>
            </form>
        </div> 
    )
    
}