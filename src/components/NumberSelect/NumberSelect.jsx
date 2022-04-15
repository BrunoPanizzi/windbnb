import propTypes from 'prop-types'

import { Container } from './styles'

function NumberSelect({ title, subtitle, value, increment, decrement }) {
  return (
    <Container>
      <b>{title}</b>
      <p>{subtitle}</p>
      <div className="buttons">
        <button
          className="minus"
          onClick={decrement}
        >
          -
        </button>
        <span>{value}</span>
        <button
          className="plus"
          onClick={increment}
        >
          +
        </button>
      </div>
    </Container>
  )
}

NumberSelect.propTypes = {
  title: propTypes.string.isRequired,
  subtitle: propTypes.string.isRequired,
  value: propTypes.number.isRequired,
  increment: propTypes.func.isRequired,
  decrement: propTypes.func.isRequired,
}

export default NumberSelect
