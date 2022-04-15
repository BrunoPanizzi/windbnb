import styled from 'styled-components'

export const Container = styled.div`
  color: #333;
  font-size: 0.875rem;
  margin-block: 3rem;

  &:last-of-type {
    margin-block-end: 0;
  }

  p {
    color: #bdbdbd;
    margin-block-end: 0.625rem;
  }
  .buttons {
    display: flex;
    gap: 1rem;
    align-items: center;
    font-weight: bold;

    button {
      cursor: pointer;
      width: 1.625rem;
      height: 1.625rem;
      margin: 0;
      padding: 0;
      background: transparent;
      border: 1px solid #828282;
      border-radius: 0.25rem;
      color: #828282;
      display: grid;
      place-content: center;
    }
  }
`
