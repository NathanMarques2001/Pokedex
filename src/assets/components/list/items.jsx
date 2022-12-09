import Pokeball_List from '../../images/smartphone/pokebola-P.svg'
import './style.css'

export function ListItems({ name, number }) {
  var formatNumber = number
  var stringNumber = ''

  if (formatNumber < 10) {
    stringNumber = `00${formatNumber}`
  }
  if (formatNumber >= 10 && formatNumber < 100) {
    stringNumber = `0${formatNumber}`
  }
  if (formatNumber >= 100) {
    stringNumber = `${formatNumber}`
  }

  return (
    <>
      <span>No</span>
      <span id="list-number">{stringNumber} </span>
      <img src={Pokeball_List} alt="" />
      <span id="list-name"> {name}</span>
      <hr />
    </>
  )
}
