import { Link } from "react-router-dom";
const UserNavbar = () => {
    return ( 
        <div className="adminNavbar">
            <div className="navbar">
                <div className="title">
                <h2>USER PORTAL</h2>
            </div>
            <div className="links">
                <ul>
                <li><Link to="/user/" >DASH BOARD</Link></li>
                <li><Link to="/user/book-list">BOOK LIST</Link></li>
                <li><Link to="/">LOGOUT</Link></li>
                </ul>
            </div>
            </div>
            
        </div>
    );
}
 
export default UserNavbar;