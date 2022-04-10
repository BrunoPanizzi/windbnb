import styled from 'styled-components'

export const Container = styled.div`
  width: 350px;
  height: 400px;

  img {
    width: 100%;
    aspect-ratio: 4/3;
    border-radius: 1.5rem;
    margin-bottom: 1rem;
  }

  .small-info {
    display: grid;

    .rating {
      display: flex;
    }
  }
`
