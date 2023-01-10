import { Link } from "react-router-dom";
import '../styles/adminNavbar.css';
const AdminNavbar = () => {
    return ( 
        <div className="adminNavbar">
            <div className="navbar">
                <div className="title">
                <h2>ADMIN PORTAL</h2>
            </div>
            <div className="links">
                <ul>
                <li><Link to="/admin/" >DASH BOARD</Link></li>
                <li><Link to="/admin/add-book">ADD BOOKS</Link></li>
                <li><Link to="/admin/add-user">ADD USERS</Link></li>
                <li><Link to="/admin/book-list">BOOK LIST</Link></li>
                <li><Link to="/admin/user-list">USER LIST</Link></li>
                <li><Link to="/">LOGOUT</Link></li>
                </ul>
            </div>
            </div>
            
        </div>
    );
}

export default AdminNavbar;