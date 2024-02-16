import React ,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';



function Login() {
    const [email,setEmail]=useState("")
    const [password,setPassword]= useState("")
    const [showPassword, setShowPassword] = useState(false);
    const navigate= useNavigate()

    async function handleSubmit(e){
    e.preventDefault();

    await axios.post('https://ecommerce-backend-cacr.onrender.com/login',{email,password}).then(result=>{console.log(result)
    if(result.data==="Success"){
        navigate('/home')
    }
}).catch(err=> console.log(err))
    } 
    

  return (
    <div className='login template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary'>
       <div className='40-w p-5 rounded bg-white'> 
       <form onSubmit={handleSubmit}>
            <h3 className='text-center'>Sign In</h3>
            <div className='mb-2'>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Enter Email' className='form-control' onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className='mb-2'>
            <label htmlFor='password'>Password</label>
            <div className="input-group">
              <input type={showPassword ? 'text' : 'password'} placeholder='Enter Password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
              <button type="button" className="btn btn-outline-secondary" onClick={() => setShowPassword(!showPassword)}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
            </div>
            <div className='mb-2'>
            <input type='checkbox' id='check' />
            <label htmlFor='check' className=' ms-2'> Remember Me</label>
          </div>
            <div className='d-grid'>
                <button type='submit' className='btn btn-primary' >Sign in</button>
            </div>
                <p className='text-end mt-2'>Not Registered?<Link to='/' className='ms-2'>Sign up </Link></p>
        </form>
        </div>
    </div>
  )
}

export default Login
