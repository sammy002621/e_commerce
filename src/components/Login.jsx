import React, { useState } from 'react'
import Footer from './Footer';
import Header from './Header';
import HeaderHome from './HeaderHome';
import axios from 'axios';
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate = useNavigate();
    const [userData,setUserData]=useState({
        email:'',
        password:'',
    })

    const handleSubmit =  async (e)=>{
        e.preventDefault();
        const {email,password}=userData;
        const{ data} =await axios.post("/login",{email,password});
        console.log(data);
        if(data.error) {
            toast.error(data.error)
        }else{
            setUserData({
                email:'',
                password:''
                 });
                 toast.success("user logged in");
        }
        
        
        
        
       
    }
  return (
    <div>
        {/* header */}

<Header/>

        {/* body */}
<HeaderHome/>

        <div className='px-5 lg:w-[80%] flex lg:mt-20 lg:h-[720px] '>
                <div className=' hidden w-[65%] lg:inline lg:w-[60%] object-cover bg-center bg-footer_texture bg-red-600'>
                </div>
                <div className='  lg:w-[5%]  flex items-center justify-center  '>
                   
                </div>
                <div className='  w-full lg:w-[40%]  pt-20 lg:pt-60 flex justify-start lg:justify-center lg:pl-20 overflow-hidden '>
                    <div className=''>
                        <h1 className='text-xl lg:text-3xl font-medium mb-4'>Log in to Exclusive</h1>
                        <p className='text-baseline mb-10'>Enter your details below</p>
                        <form action="" className='mt-5' onSubmit={handleSubmit}>
                            <input type="text" placeholder='Email or Phone Number' value={userData.email} className='bg-transparent border-b-2  border-gray-700 outline-none pb-2  mb-10 w-full' onChange={(e)=>{
                                setUserData({
                                    ...userData,
                                    email:e.target.value
                                })
                            }} /> 
                            <input type="password" placeholder='Password' value={userData.password} className='bg-transparent border-b-2  outline-none pb-2 border-gray-700  mb-8 w-full' onChange={(e)=>{
                                setUserData({
                                    ...userData,
                                    password:e.target.value
                                })
                            }} />
                            <div className='flex justify-between items-center'>
                                <div>
                                <button className='text-white bg-sammy  px-3 lg:px-10 py-3 rounded-md' type='submit'>Log In</button>
                                </div>
                                <div>
                                    <p className='text-happy'><a href="google.com">Forgot Password?</a></p>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>


        {/* footer */}
        <Footer/>
    </div>
  )
}

export default Login