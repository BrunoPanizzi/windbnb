import { useEffect, useState } from 'react'

import { getAll } from '../../services/staysService'

import { Container, StaysContainer } from './styles'

import Stay from '../Stay/Stay'

function Content() {
  const [stays, setStays] = useState([])

  useEffect(() => {
    setStays(getAll())
  }, [])

  return (
    <Container>
      <div className="header">
        <h2>Stays in finland</h2>
        <span>12+ stays</span>
      </div>
      <StaysContainer>
        {stays.map((info) => (
          <Stay {...info} />
        ))}
      </StaysContainer>
    </Container>
  )
}

export default Content
