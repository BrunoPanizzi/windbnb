import styled from 'styled-components'

export const Container = styled.main`
  padding-inline: 2.5rem;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 24px;
      font-weight: bold;
      padding-block-end: 2rem;
    }
  }
`

export const StaysContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`
