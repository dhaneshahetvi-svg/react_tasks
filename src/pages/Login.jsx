import { Link } from "react-router-dom";
import './Login.css';

const Login = () => {
    return(
        <div className="form-container">
            <h1 className="form-title">Welcome back</h1>
            <form>
                {/* Email field */}
                <div className="form-group">
                    <label htmlFor="email"> Email Address</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email">
                        
                    </input>
                </div>
                {/* password field */}
                <div className="form-group">
                    <label htmlFor="password">password</label>
                    <input type="password"
                     name="password" 
                     id="password" 
                     placeholder="password"
                     />
                </div>
                {/* sunmit Button */}
                <button type="submit" className="btn-primary">
                    Login
                </button>

            </form>

            {/* Link to Register page */}
            <p className="link-text">
                Don't have an account? <Link to ="/register">Register here
                </Link>
            </p>
            
        </div>
    )
}
export default Login;