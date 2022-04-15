import { useState } from 'react'

import logo from '../../assets/logo.svg'
import search from '../../assets/search.svg'

import { Container, InputsContainer } from './styles'

import BigSearch from './BigSearch'

function Header() {
  const [searchVisible, setSearchVisible] = useState(false)

  const handleToggleSearchVisible = () => setSearchVisible((prev) => !prev)

  return (
    <Container>
      <img src={logo} alt="brand logo" />
      <InputsContainer onClick={handleToggleSearchVisible}>
        <span>Helsinki, Finland</span>
        <span>n of guests</span>
        <img src={search} />
      </InputsContainer>

      {searchVisible && <BigSearch onClose={handleToggleSearchVisible} />}
    </Container>
  )
}

export default Header
