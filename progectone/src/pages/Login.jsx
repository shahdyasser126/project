import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom'; // استيراد Link  

const Login = () => {
  return (
    <div className="container">  
            <div className="image-container"></div>  
            <div className="form-container">  
                <h1>Log In</h1>  
                <form className='form'>  
                      
                    <label>Email</label>
                    <input type="email"   id="email"   
                            placeholder=" favoureddesigner@gmail.com  " required  className='input'/>  
                     
                    <label>Password</label>
                    <input type="password"     id="password"    
                            placeholder="**********" required />  
                      <p className='forgot' href="/#">Forgot Password?</p>
                          
                     
                    <button type="submit"> Log in  </button>    
                </form>  
                <div className='or1'>
                 <hr/> OR  <hr/></div>
                <div className="social-buttons1">  
                <i class="fa-brands fa-google fa-2xl"></i>
                    <i class="fa-brands fa-facebook fa-2xl" ></i>
 
                    <i class="fa-brands fa-twitter fa-2xl"></i>
                </div>  
                <div className='footer1'>
                <p>Already have an account? <a className='signUp' href='/#'>Sign Up</a></p>

                 {/* <p> Already have an account?    <Link to="/Register">signUp  </Link></p>*/  }  </div> 
            </div>  
        </div>  
    );  
};  

export default Login