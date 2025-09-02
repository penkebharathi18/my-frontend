import { useState } from "react";
const Form=()=>{
    const [Data,setData]=useState({
        FirstName:"",
        LastName:"",
        Email:"",
        password:"",
        Mobilenumber:""
    })
    const handleSubmit=()=>{
        const EmailRegex = /[a-zA-Z\d]+@[a-zA-Z]+\.[a-z]/
    const regex = /[-`~!@#$%^&*()_+={}[\]/"';:,.<>?|]/
    const regex1 = /[a-z]/
    const regex2 = /[A-Z]/
    const regex3 = /[\d]/  //[0-9]

        if(Data.FirstName===""){
            alert("Enter First name")
        }
        else if(Data.LastName===""){
            alert("Enter last name")
        }
        else if(Data.Mobilenumber===""){
            alert("Enter Mobilenumber")
        }
        else if(Data.Email===""){   
            alert("Enter Email")
        }
        else if(!EmailRegex.test(Data.Email)){
            alert("Enter valid Email")
        }
        else if(Data.password===""){
            alert("Enter Password")
        }
        else if(!regex1.test(Data.password)){
            alert("password must contain lowercase")
        }
        else if(!regex2.test(Data.password)){
            alert("password must contain uppercase")
        }
        else if(!regex3.test(Data.password)){
            alert("password must contain one letter")
        }
        else if(!regex.test(Data.password)){
            alert("password contain special character")
        }
        else{
            alert("submitted succesfully")
        }
    }
    
    return(
     <div className="container">
        <input type="text" placeholder="Firstname" onChange={(e)=>{setData({...Data,FirstName:e.target.value})}}/><br/>
        <input type="text" placeholder="Lastname" onChange={(e)=>{setData({...Data,LastName:e.target.value})}}/><br/>
        <input type="text" placeholder="Email" onChange={(e)=>{setData({...Data,Email:e.target.value})}}/><br/>
        <input type="text" placeholder="password" onChange={(e)=>{setData({...Data,password:e.target.value})}}/><br/>
        <input type="text" placeholder="Mobilenumber" onChange={(e)=>{setData({...Data,Mobilenumber:e.target.value})}}/><br/>
        <button onClick={()=>{handleSubmit()}}>Submit</button>
     </div>   
    )
}
export default Form;