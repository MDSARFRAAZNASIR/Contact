import React, { useState } from "react";
const AddContact=()=>{
    const [name, setName]=useState("")
    const [contact, setContact]=useState("")
    const [relation, setRelation]=useState("")

    const Addcontact=async ()=>{
        console.log(name, contact, relation)
        let result=await fetch("http://localhost:4500/addcontact",{
            method:'post',
            body: JSON.stringify({name, contact, relation}),
            headers:{
                'content-Type':"application/json"
            }
        })
        result = await result.json();
        console.log(result);
    }
    return(
        <div>
            <h2 className="head">Add Contact</h2>
            <input type="text" placeholder="Enter the  name" className="addbox"
            value={name} onChange={(e)=>(setName(e.target.value))}/>
            <input type="text" placeholder="Enter  mobile number" className="addbox"
            value={contact} onChange={(e)=>(setContact(e.target.value))}/>
            <input type="text" placeholder="Enter the relation" className="addbox"
            value={relation} onChange={(e)=>(setRelation(e.target.value))}/>
            <button onClick={Addcontact} className="button addbox">Add-Contact</button>
        </div>
    )
}
export default AddContact;