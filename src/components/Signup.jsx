import React,{useState} from 'react'
import Footer from './Footer';
import Header from './Header';
import HeaderHome from './HeaderHome';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
function Signup() {
  const [userData,setUserData]=useState({
    name:'',
    email:'',
    password:''
  })

  const navigate = useNavigate();
  

  const handleSubmit = (e)=>{
    e.preventDefault();
    const {name,email,password}=userData;
    try {
      const data=axios.post('/register',{name,email,password})
      console.log(data);
      if(data.error){
      console.log(data.error);
      }else{
        setUserData({
          name:'',
          email:'',
          password:''
        })
        
        
        toast.success("user created",{
          icon: '👏',
          
        })

        navigate('/login');

      
      }
    } catch (error) {
      
    }
    
  }

 

  return (
    <div>
        {/* header */}
        <Header/>


        {/* body */}
<HeaderHome/>

        <div className='px-5 lg:px-0 lg:w-[80%] flex lg:mt-20 lg:h-[720px]'>
                <div className='hidden w-[65%] lg:inline lg:w-[60%] object-cover bg-center bg-footer_texture bg-red-600'>
                </div>
                <div className='lg:w-[5%]  flex items-center justify-center  '>
                   
                </div>
                <div className='w-full  md:w-[80%] lg:w-[50%]  pt-20 lg:pt-60 flex justify-end md:mx-auto lg:pl-20 overflow-hidden '>
                    <div className=''>
                        <h1 className=' text-2xl sm:text-3xl font-medium mb-4'>Create an account</h1>
                        <p className='text-baseline mb-10'>Enter your details below</p>
                        <form action="" className='mt-5' onSubmit={handleSubmit}>
                        
                        <input type="text" placeholder='Name' id='name' value={userData.name} className='bg-transparent border-b-2  border-gray-700 outline-none pb-2  mb-10 w-full ' onChange={(e)=>{
                         setUserData({
                          ...userData,
                          name:e.target.value
                         })
                        }} onFocus={()=>{
                          document.getElementById("name").style.borderBottomColor='white'
                        }
                      }  onBlur={()=>{
                        document.getElementById("name").style.borderBottomColor="gray"  
                      }} />
                        <input type="text"  value={userData.email} placeholder='Email or Phone Number' id='email'  onChange={(e)=>{
                         setUserData({
                          ...userData,
                          email:e.target.value
                         })
                        }} onFocus={()=>{
                          document.getElementById("email").style.borderBottomColor='white'
                        }
                      }  onBlur={()=>{
                        document.getElementById("email").style.borderBottomColor="gray"
                      }}   className='bg-transparent border-b-2  border-gray-700 outline-none pb-2  mb-10 w-full' />
                            <input type="password" value={userData.password} placeholder='Password' id='password' onChange={(e)=>{
                         setUserData({
                          ...userData,
                          password:e.target.value
                         })
                        }} onFocus={()=>{
                          document.getElementById("password").style.borderBottomColor='white'
                        } 
                      }    onBlur={()=>{
                        document.getElementById("password").style.borderBottomColor="gray"
                      }} className='bg-transparent border-b-2  outline-none pb-2 border-gray-700  mb-10 w-full' />
                            <div className=''>
                                <div className='mb-4'>
                                <button className='text-white bg-sammy px-10 py-3 rounded-md w-full' type='submit'>Create Account</button>
                                </div>
                                <div className='flex items-center border-black border  px-10 py-3 rounded-md w-full justify-center'>
                                   <div className='mr-2'>
                                             <img src="/Icon-Google.svg" alt="" />
                                   </div>
                                   <div className='sm:text-lg border-gray-500 hover:cursor-pointer '>
                                    Sign up with Google
                                   </div>
                                </div>

                                <div className='text-center mt-9 text-lg text-gray-700 flex items-center justify-center'>
                                      <div className='mr-4'>
                                        Already have Account
                                      </div>
                                      <div>
                                        <Link to={'/login'}>Login</Link>
                                        <div className='border border-gray-600'></div>
                                      </div>
                                     
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


export default Signup