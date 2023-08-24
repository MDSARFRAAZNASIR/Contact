import React from "react";
import { useNavigate } from "react-router-dom"; 
const LogIn=()=>{
    const [email, setEmail]=React.useState("")
    const [password, setPassword]=React.useState("")
    const navigate=useNavigate();
    const Login= async()=>{
        console.log("email, password", email, password);
        let result = await fetch("http://localhost:4500/login",{
            method: 'post',
            body: JSON.stringify({email, password }),
            headers:{
                'content-Type':'application/json'
            }
        })
        result= await result.json();
        console.log(result);
        if(result.name){
            localStorage.setItem("user", JSON.stringify(result));
            navigate("/")
        }else{
            alert("fill correct data")
        }
    }
    return(
        <div>
            <h2 className="head">Log-In</h2>
            <input type="text" placeholder="Enter your email" className="addbox"
             onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <input type="password" placeholder="Enter your password" className="addbox"
             onChange={(e)=>setPassword(e.target.value)} value={password}/>
            <button onClick={Login} type="button" className="button addbox">Log-In</button>
        </div>
        
    )
}
export default LogIn;
