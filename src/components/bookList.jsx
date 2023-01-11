import { useState, useEffect } from "react";
import '../styles/bookList.css';
import { useNavigate,useLocation } from "react-router-dom";
import ReadBook from "./readbook";

const BookList = () => {
    let [books, setBooks] = useState([])
        // to fetch the routr value
    let location = useLocation()

    useEffect(()=> {
        let fetchData = async () => {
            let response = await fetch('http://localhost:4000/books')
            let data = await response.json()
            setBooks(data)
        }
        fetchData()

    },[books])
    //  deleted book from server
    let handleremove=(id,title)=>{
        fetch(`http://localhost:4000/books/${id}`,{
            method:'DELETE'
        }); 
        alert(`${title} will be deleted permanentaly`)
    }

    let navigate = useNavigate()
    let readBook=(id)=>{
        if (location.pathname == '/admin/book-list') {
            navigate(`/admin/book-list/${id}`)
        }else{
            navigate(`/user/book-list/${id}`)
        }

    }
    return (
        <div className="bookList">
            <h1>Book List:{books.length}</h1>
        <div className="books_section">
            {books.map((data)=> (
                <div className="book">
                    <div className="img">
                    <img width="200"height="250" src={data.thumbnailUrl} alt="" />
                    </div>
                    <div className="details">
                    <h2>Title: {data.title}</h2>
                    <h3>Author: {data.authors}</h3>
                    <h4>Category: {data.categories}</h4>
                    <h5>PageCount: {data.pageCount}</h5>
                    <button onClick={()=>readBook(data.id)}>Read More</button>
                    {location.pathname =='/admin/book-list' && <button onClick={()=>handleremove(data.id,data.title)}>Delete</button>}
                    </div>
                </div>
            ))}
            <ReadBook fn={readBook} />
        </div>
        </div>
    );
}


export default BookList;