// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navigation-container">
    <ul className="list-container">
      <Link to="/" className="nav-item">
        <li>Home</li>
      </Link>
      <Link to="/about" className="nav-item">
        <li>About</li>
      </Link>
    </ul>
  </nav>
)

export default Header
