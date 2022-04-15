import { useState } from 'react'

import logo from '../../assets/logo.svg'
import search from '../../assets/search.svg'

import { useSearch } from '../../context/SearchContext'

import { Container, InputsContainer } from './styles'

import BigSearch from './BigSearch'

function Header() {
  const [searchVisible, setSearchVisible] = useState(false)
  const [guests, setGuests] = useState({ adults: 0, children: 0 })

  const { location } = useSearch()

  const handleToggleSearchVisible = () => setSearchVisible(prev => !prev)

  const totalGuests = guests.adults + guests.children

  return (
    <Container>
      <img
        src={logo}
        alt="brand logo"
      />
      <InputsContainer onClick={handleToggleSearchVisible}>
        <span>{location}</span>
        {totalGuests === 0 ? (
          <span className="no-guests">Add guests</span>
        ) : (
          <span>{totalGuests} guests</span>
        )}
        <img src={search} />
      </InputsContainer>

      {searchVisible && (
        <BigSearch
          onClose={handleToggleSearchVisible}
          guests={guests}
          setGuests={setGuests}
        />
      )}
    </Container>
  )
}

export default Header
