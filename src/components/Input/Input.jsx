import { Container } from './styles'

function Input({ label, placeholder, innerRef }) {
  return (
    <Container>
      {label}
      <input ref={innerRef} placeholder={placeholder} />
    </Container>
  )
}

export default Input
