import React, { useState ,useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import "../App.css"
import { Link } from 'react-router-dom'

const Signup = () => {

  const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const navigate=useNavigate()

    useEffect(()=>{
  
      const auth=localStorage.getItem("user")
      if(auth){
        navigate("/login")
      }
    })



    const collectdata=async()=>{
        console.log(name,email,password);
        let result=await fetch("https://calm-red-zebra-gear.cyclic.app/register",{
            method:"post",
            body:JSON.stringify({name,email,password}),
            headers:{
                "Content-Type":"application/json"
            },
        });
        result=await result.json()
        console.log(result);
        alert("Registration Successfully");
        // localStorage.setItem("user",JSON.stringify(result.result));
        // localStorage.setItem("token", JSON.stringify(result.auth));

        if(result){
            navigate("/login")
        }
    }

   
  return (
    <div className='box-sinup'>
        <div className="from-box-1">
            
        </div>
        <div className="from-box-2">
        <h1 className='register'>SIGN UP</h1>
        <input type="text" required placeholder='enter name' className='inputbox' value={name} onChange={(e)=>setname(e.target.value)}/>
        <input type="text" required placeholder='enter email' className='inputbox' value={email} onChange={(e)=>setemail(e.target.value)}/>
        <input type="password" required placeholder='enter password' className='inputbox' value={password} onChange={(e)=>setpassword(e.target.value)}/>
        <br/>
        <Link to="/login">
          <button style={{cursor:"pointer"}} onClick={collectdata} type="button" className="buttonsignup">
            sign up
          </button>
        </Link>

        </div>
    </div>
  )
}

export default Signup