import { Link } from "react-router"
import "./Header.css"

const Header = () => {
    return (
        <header>
            <nav>
                <h3>Bordeaux Times</h3>
                <ul style={{ listStyle: 'none' }}>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/articles">
                            Articles
                        </Link>
                    </li>
                    <button>Login</button>
                </ul>
            </nav>
        </header>
    )
}

export default Header