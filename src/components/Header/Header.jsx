import logo from '../../assets/logo.svg'

import { Container, InputsContainer } from './styles'

function Header() {
  return (
    <Container>
      <img src={logo} alt="brand logo" />
      <InputsContainer></InputsContainer>
    </Container>
  )
}

export default Header
