import './style.css'
import Pokeball_List from '../../images/smartphone/pokebola-P.svg'

export function List() {
  return (
    <>
      <div id="container">
        <div id="list-title">Lista de Pokémons</div>
        <div id="list-content">
          <span>No</span>
          <span id="list-number">006 </span>
          <img src={Pokeball_List} alt="" />
          <span id="list-name"> charizard</span>
        </div>
      </div>
    </>
  )
}
