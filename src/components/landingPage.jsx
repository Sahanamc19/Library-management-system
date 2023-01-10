import { Link } from "react-router-dom";
import '../styles/landingPage.css'
const LandingPage = () => {

    return(
        <div className="landingPage">
            <div className="selectLoginType">
                <h1 className="head">Library Management System</h1>
                <Link to='/admin-login' className="btn1">Admin Login</Link>
                <Link to='/user-login' className="btn2">User Login</Link>
            </div>
        </div>
    )
}
export default LandingPage;