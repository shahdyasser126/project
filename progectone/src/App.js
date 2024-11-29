//  import React, { useState } from'react';
 
// import './App.css';  

 

// const App = () => {  
//     const [email, setEmail] = useState('');  
//     const [password, setPassword] = useState('');
//     const [phone, setPhone] = useState(''); // حالة جديدة لرقم الهاتف   
//     const [errorMessage, setErrorMessage] = useState('');  

//     const check = () => {  
//         let text = '';  
        
//         if (email.indexOf('@') === -1 || email.length < 8 || !email.endsWith('gmail.com')) {  
//             text = 'يرجى إدخال بريد إلكتروني صحيح';  
//             setErrorMessage(text);  
//             return false;   
//         } 
//         if (password.length < 10) {  
//             text = 'يرجى إدخال كلمة مرور تتكون من 10 أحرف على الأقل';  
//             setErrorMessage(text);  
//             return false;  
//         }  

//         if (phone.length !== 11 || isNaN(phone) || !phone.startsWith('01')) {  
//             text = 'يرجى إدخال رقم الهاتف بشكل صحيح';  
//             setErrorMessage(text);  
//             return false;  
//         }  
        
//         setErrorMessage('');  
//         return true;   
//     };  

//     const handleSubmit = (event) => {  
//         event.preventDefault();  
        
//         // تحقق من المدخلات قبل تقديم النموذج  
//         if (check()) {  
//             alert('تم التسجيل بنجاح!');  
           
//         }  
//     };  



//     return (  
//         <div className="container">  
//             <div className="image-container"></div>  
//             <div className="form-container">  
//                 <h1>Let's Get Started</h1>  
//                 <form onSubmit={handleSubmit}>  
//                     <label>Full Name</label>
//                     <input type="text" placeholder="Beomafav" required />  
//                     <label>Email</label>
//                     <input type="email"   id="email"  value={email}   
//                         onChange={(e) => setEmail(e.target.value)}    placeholder=" favoureddesigner@gmail.com  " required />  
//                     <label>Phone Number</label>
//                     <input   
//                         type="text"
//                           id="phone"  placeholder="0123456789" value={phone} onChange={(e) => setPhone(e.target.value)}  required/>  
//                     <label>Password</label>
//                     <input type="password"     id="password"  value={password}   
//                         onChange={(e) => setPassword(e.target.value)}    placeholder="**********" required />  
                  
//                         {errorMessage && <div className="error-message">{errorMessage}</div>}  
//                     <div className='agree'>
//                         <input type="checkbox" required/> 
//                         <p>
//                             By continuing you agree to <a href="#">Terms & Conditions </a>and <a href="#">Privacy Policy </a>
//                         </p>
//                     </div>

//                     <button type="submit"> Create Account  </button>    
//                 </form>  
//                 <div className='or'>
//                  <hr/> OR  <hr/></div>
//                 <div className="social-buttons">  
//                 <i class="fa-brands fa-google fa-2xl"></i>
//                     <i class="fa-brands fa-facebook fa-2xl" ></i>
 
//                     <i class="fa-brands fa-twitter fa-2xl"></i>
//                 </div>  
//                 <div className='footer'>


//                  <p> Already have an account?    <a href="#"> Log in  </a></p>    </div>
//             </div>  
//         </div>  
//     );  
// };  
import React from 'react';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Register from './pages/Register'; // استيراد صفحة التسجيل  
import Login from './pages/Login';
import './App.css'; // استيراد App.css 

const App = () => {  
    return (  
         <Router>  
             <Routes>  
                 <Route exact path="/" element={<Register />} /> 
                 <Route path="/login" element={<Login />} /> 
             </Routes>  
         </Router>
    );  
};  

export default App;  
 