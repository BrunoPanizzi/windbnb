import styled from 'styled-components'

export const Container = styled.header`
  margin-top: 1.5rem;
  padding-inline: max(1rem, 4vw);
  margin-bottom: 4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    justify-content: center;
  }

  img {
    height: 1.125rem;
    @media (max-width: 480px) {
      height: 2rem;
    }
  }
`

export const InputsContainer = styled.div`
  height: 3.5rem;
  border-radius: 1rem;
  min-width: 300px;
  background-color: #efefef;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  display: flex;

  span {
    flex: 1;
    border-right: 1px solid #ddd;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 1.5rem;
    height: 1.5rem;
    margin: 1rem;
  }
`
