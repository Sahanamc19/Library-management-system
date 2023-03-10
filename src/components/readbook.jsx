import '../styles/readbook.css'
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const ReadBook = () => {
    let[book,setbooks]=useState([])
    //  to get route parameter
    let params = useParams()
    useEffect(()=> {
        let fetchData = async () => {
            let response = await fetch(`http://localhost:4000/books/${params.id}`)
            let data = await response.json()
            setbooks(data)
        }
        fetchData()

    },[])
    return (  
        <div className="read">
            <h1>{book.title}</h1>
            <hr />
            <p>{book.shortDescription}</p>
            <p>{book.longDescription}</p>
        </div>


    );
}

export default ReadBook;