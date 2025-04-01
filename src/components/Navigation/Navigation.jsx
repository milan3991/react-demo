import { Link } from "react-router-dom";
import './navigation.style.css'

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="navigation_wrapper">
                <span><Link to="/">Our blog</Link></span>
                <nav className="navigation_list">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>
        </div>
    )
}

export default Navigation;