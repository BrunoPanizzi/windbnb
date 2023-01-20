import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  min-width: 300px;
  margin-block-end: 2rem;
  border-radius: 1.5rem;
  transition: 0.6s;

  &:hover {
    transform: scale(1.03);
  }

  & > img {
    width: 100%;
    aspect-ratio: 4/3;
    border-radius: 1.5rem;
    margin-bottom: 1rem;
    object-fit: cover;
    box-shadow: 0 3px 8px rgba(0 0 0 / 0.3);
  }

  .info {
    display: grid;
    gap: 0.625rem;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: 1.75rem auto;
    justify-content: start;
    align-items: center;
    color: #828282;
    font-size: 0.875rem;

    .super-host {
      color: #4f4f4f;
      border: 1px solid #4f4f4f;
      font-weight: bold;
      border-radius: 12px;
      padding: 0.5rem 0.625rem;
    }

    .rating {
      display: flex;
      justify-self: end;
      color: #eb5757;
      font-weight: bold;

      img {
        width: 1.25rem;
        aspect-ratio: 1;
        margin: 0;
      }
    }

    h3 {
      font-weight: bold;
      font-size: 1.125rem;
      color: #333;

      grid-column: 1 / -1;
      grid-row: 2;
    }
  }
`
