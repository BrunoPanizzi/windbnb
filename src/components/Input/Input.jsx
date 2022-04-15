import propTypes from 'prop-types'

import { Container } from './styles'

function Input({ readOnly, label, placeholder, innerRef, value, onChange }) {
  return (
    <Container>
      {label}
      <input
        readOnly={readOnly}
        ref={innerRef}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Container>
  )
}

Input.propTypes = {
  readOnly: propTypes.bool,
  label: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func,
}

Input.defaultProps = {
  readOnly: false,
}

export default Input
