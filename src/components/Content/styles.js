import styled from 'styled-components'

export const Container = styled.main`
  padding-inline: max(1rem, 4vw);

  .header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding-block-end: 2rem;

    h2 {
      font-size: 24px;
      font-weight: bold;
    }
  }
`

export const StaysContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`
