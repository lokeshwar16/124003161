import React, { useState } from "react"
import "react-icons"

const email,setemail = useState("");
const password,setpassword = useState

function Login(){
            <div className="">
                    <h1 className='font-bold text-3xl'>Train Schedule<BsTrainFront/></h1> 
                    <div>
                    <h1>Login</h1>
                    <form action="post" onSubmit={() =>{
                        e.preventDefault
                        a = {email,password}
                    }}>
                        <input onChange = {(e) =>{
                            setemail(e.target.value)
                        }} type="email" placeholder="email" value={e}  classsName='p-4 w-5cm item center'/>
                        <input onChange = {(e) =>{
                            setpassword(e.target.value)
                        }} type="password" placeholder="password" value={e}  classsName='p-4 w-5cm item center'/>
                        <button type="submit" ></button>
                    </form>
                    </div>
                </div>
}
export default Login