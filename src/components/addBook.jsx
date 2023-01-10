import { useState } from "react";
import { useNavigate } from "react-router-dom";
import'../styles/addBook.css'
const AddBook = () => {
    // title,categories,authors,pageCount,shortDescription,longDescription,thumbnailUrl
    let [title,setTitle] = useState('')
let [authors,setAuthors] = useState('')
let [categories,setCategories] = useState('')
let [pageCount,setPageCount] = useState('')
let [shortDescription,setShortDescription]= useState('')
let [longDescription,setLongDescription] = useState('')
let [thumbnailUrl,setThumbnailUrl] = useState('')

let navigate = useNavigate()

let handleSubmit = (e)=>{
    e.preventDefault();
    // data to be posted
    let data ={title,authors,categories,pageCount,shortDescription,longDescription,thumbnailUrl}

    // posting to server
    fetch('http://localhost:4000/books',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
    })
    alert('book added sucessfuly')
    navigate('/admin/book-list')
}


    return ( 
        <div className="addBook">
            <h1>Add a book</h1>
            <div className="formbook">
                <form action="" onSubmit={handleSubmit}>
                    <div className="title" >
                        <input value ={title} onChange={(e)=>setTitle(e.target.value)}type="text" required placeholder= "title of the book" />
                    </div>
                    <div className="authors">
                        <input value = {authors} onChange={(e)=>setAuthors(e.target.value)} type="text" required placeholder=" authors of the book"/>
                    </div>
                    <div className="categories">
                        <input value = {categories} onChange={(e)=>setCategories(e.target.value)} type="text" required placeholder="categories of the book" />
                    </div>
                    <div className="pageCount">
                        <input value = {pageCount} onChange={(e)=>setPageCount(e.target.value)} type="number" required placeholder="number of pages" />
                    </div>
                    <div className="shortDescription">
                    <textarea value = {shortDescription} onChange={(e)=>setShortDescription(e.target.value)} name="" placeholder="shortDescription of the book" id="" cols="52" rows="7"></textarea>
                    </div>
                    <div className="longDescription">
                    <textarea  value = {longDescription} onChange={(e)=>setLongDescription(e.target.value)}name="" placeholder="longdescription of the book" id="" cols="52" rows="7"></textarea>
                    </div>
                    <div className="thumbnailUrl">
                    <input  value = {thumbnailUrl} onChange={(e)=>setThumbnailUrl(e.target.value)}type="text" placeholder="url" />
                    </div>
                    <button type="submit">Add Book</button>
                </form>
            </div>
        </div>
    );
}

export default AddBook;