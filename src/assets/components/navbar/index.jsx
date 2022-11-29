import './style.css'

export function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="titulo">POKÉDEX</div>
        <div className="links">
          <ul>
            <li>
              <a href="#">ÍNICIO</a>
            </li>
            <li>
              <a href="#">CONTATO</a>
            </li>
            <li>
              <a href="#">SOBRE</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
