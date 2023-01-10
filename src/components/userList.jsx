import { useState,useEffect } from "react";
import '../styles/userList.css';
const UserList = () => {
    let[user,setUser] = useState([])
    useEffect(()=>{
        let fetchData=async()=>{
            let response= await fetch(' http://localhost:4000/users')
            let data = await response.json()
            setUser(data)
        }
        fetchData()
    },[])
    let handleremove=(id,name)=>{
        setUser(user.filter(x=>x.id !=id))
        alert(`${name} has been`)
    }
    return ( 
        <div className="userList">
            <h1>User List:{user.length}</h1>
        <div className="user_section">
            {user.map((data)=>(
                <div className="user">
                    <h1>Name:{data.name}</h1>
                    <h2>Age:{data.age}</h2>
                    <h3>Email:{data.email}</h3>
                    <h4>PhoneNumber:{data.phoneNumber}</h4>
                    <button onClick={()=>handleremove(data.id,data.name)}>Remove</button>
                </div>
            ))}
        </div>
        </div>
    );
}
 
export default UserList;