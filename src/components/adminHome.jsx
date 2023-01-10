import AdminNavbar from "./adminNavbar";
import AdminDashboard from "./adminDashboard";
import { Route, Routes } from "react-router-dom";
import BookList from "./bookList";
import UserList from "./userList";
import ReadBook from "./readbook";
import AddUser from "./addUser";
import AddBook from "./addBook";


const AdminHome = () => {
    return ( 
        <div className="adminhomepage">
            <AdminNavbar/>
            <Routes>
                <Route path='/' element={<AdminDashboard/>}/>
                <Route path='/book-list' element={<BookList/>}/>
                <Route path='/user-list' element={<UserList/>}/>
                <Route path="/book-list/:id" element={<ReadBook/>}/> 
                <Route path='/add-user' element={<AddUser/>}/>
                <Route path='/add-book' element={<AddBook/>}/>
            </Routes>
        </div>
    );
}

export default AdminHome;