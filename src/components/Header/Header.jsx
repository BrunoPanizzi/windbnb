import logo from '../../assets/logo.svg'
import search from '../../assets/search.svg'

import { Container, InputsContainer } from './styles'

function Header() {
  return (
    <Container>
      <img src={logo} alt="brand logo" />
      <InputsContainer>
        <span>Helsinki, Finland</span>
        <span>n of guests</span>
        <img src={search} />
      </InputsContainer>
    </Container>
  )
}

export default Header
