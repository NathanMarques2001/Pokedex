export function Data({ firstType, secondType, number, name, weight, height }) {
  var formatNumber = number
  var stringNumber = ''

  if (formatNumber < 10) {
    stringNumber = `00${formatNumber}`
  }
  if (formatNumber > 10 && formatNumber < 100) {
    stringNumber = `0${formatNumber}`
  }
  if (formatNumber > 100) {
    stringNumber = `${formatNumber}`
  }
  return (
    <>
      <p id="pokemon-type">
        <span id="first-type">{firstType}</span>
        <span> / </span>
        <span id="second-type">{secondType}</span>
      </p>
      <div id="pokemon-data">
        <p id="number">
          <span id="write">Número: </span>
          <span id="pokemon-number" className="pokemon-number">
            #{stringNumber}
          </span>
        </p>
        <p id="name">
          <span id="write">Nome: </span>
          <span id="pokemon-name" className="pokemon-name">
            {name}
          </span>
        </p>
        <p id="weigth">
          <span id="write">Peso: </span>
          <span id="pokemon-weight" className="pokemon-weight">
            {weight}lbs
          </span>
        </p>
        <p id="height">
          <span id="write">Altura: </span>
          <span id="pokemon-height" className="pokemon-height">
            {height}m
          </span>
        </p>
      </div>
    </>
  )
}
