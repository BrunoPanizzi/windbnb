import { useEffect, useState } from 'react'

import { getAll } from '../../services/staysService'

import { useSearch } from '../../context/SearchContext'

import { Container, StaysContainer } from './styles'

import Stay from '../Stay/Stay'

function Content() {
  const [stays, setStays] = useState([])

  const { location } = useSearch()

  useEffect(() => {
    setStays(getAll())
  }, [])

  return (
    <Container>
      <div className="header">
        <h2>Stays in {location}</h2>
        <span>{stays.length} stays</span>
      </div>
      <StaysContainer>
        {stays.map(info => (
          <Stay
            {...info}
            key={Math.random()}
          />
        ))}
      </StaysContainer>
    </Container>
  )
}

export default Content
