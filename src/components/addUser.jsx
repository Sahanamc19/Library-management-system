import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/addUser.css'
const AddUser = () => {
    let[name,setName]=useState('')
    let[age,setAge]=useState('')
    let[email,setEmail]=useState('')
    let[phNo,setPhno]=useState('')
    
    let navigate= useNavigate()
    let handleSubmit =(e)=>{
        e.preventDefault()// to prevent reloading
        let data = {name,age,email,phNo}
        // console.log(data);f
        fetch('http://localhost:4000/users',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        alert('data added sucessfuly')
        navigate('/admin/user-list')
    }
    // let reset =()=>{
    //     setTitle("")
    //     setGenre("")
    //     setlang("")
    //     setRating("")
        
    // }
    return ( 
        <div className="addUser">
            <h1>Add User</h1>
            <div className="form-add">
                <form onSubmit={handleSubmit}>
                    <div className="name">
                        <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="age">
                        <input type="number" min='1' placeholder="Enter age"value={age} onChange={(e)=>setAge(e.target.value)}/>
                    </div>
                    <div className="email">
                        <input type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="phNo">
                        <input type="tel" minLength='10' maxLength='10' placeholder="Enter PhoneNumber" value={phNo} onChange={(e)=>setPhno(e.target.value)} />
                    </div>
                    <button type="submit">Add User</button>
                </form>
            </div>
        </div>
     );
}
 
export default AddUser;