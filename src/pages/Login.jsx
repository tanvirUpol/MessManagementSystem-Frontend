import { useState } from "react"
import { useLogin } from "../hooks/useLogin"

const Login = () => {
    const [phone,setPhone] = useState('')
    const [password,setPassword] = useState('')
    const {login,error,loading} = useLogin()

   
    // const {login,error,isloading} = useLogin()

    const handleSubmit = async (e) =>{
        
        e.preventDefault()
        await login(phone,password)
        
        // await login(email,password)
    }

    return (
       <form className="login" onSubmit={handleSubmit} >
        <h3>Log in</h3>
        <label>Phone:</label>
        <input 
            type="text" 
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
        />

        <label>Password:</label>
        <input 
            type="password"  
            onChange={(e) => setPassword(e.target.value)}
            value={password}
        />


        <button disabled={loading} >Log in</button>
        {error && <div className="error" >{error.message}</div>}
       </form>
    )
}
export default Login