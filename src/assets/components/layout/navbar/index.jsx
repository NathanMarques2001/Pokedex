import './style.css'
import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="titulo">POKÉDEX</div>
        <div className="links">
          <ul>
            <li>
              <Link to="/">ÍNICIO</Link>
            </li>
            <li>
              <Link to="/contact">CONTATO</Link>
            </li>
            <li>
              <Link to="/about">SOBRE</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
