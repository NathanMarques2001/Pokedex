import './style.css'

export function Navbar({index, contact, about}) {
  return (
    <>
      <nav className="navbar">
        <div className="titulo">POKÉDEX</div>
        <div className="links">
          <ul>
            <li>
              <a href={index}>ÍNICIO</a>
            </li>
            <li>
              <a href={contact}>CONTATO</a>
            </li>
            <li>
              <a href={about}>SOBRE</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
