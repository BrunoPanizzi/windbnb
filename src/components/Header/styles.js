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

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0 0 0 / 0.5);
`

export const BigInputContainer = styled.div`
  width: 100vw;
  background: #e8e8e8;
  padding: calc(clamp(1rem, 5vw, 6rem) * 0.7) clamp(1rem, 5vw, 6rem);
  transition: 0.3s;

  button {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    background: #eb5757;
    color: #efefef;
    font-weight: bold;
    padding: 0.625rem 1rem;
    margin-left: auto;
    border: none;
    border-radius: 1rem;

    @media (max-width: 630px) {
      margin: auto;
      margin-top: 2rem;
    }
  }

  .inputs {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    background: #efefef;
    border-radius: 1rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  .location {
    max-width: 450px;

    div {
      display: flex;
      align-items: center;
      padding: 0.625rem 1.625rem;
      margin-block: 1rem;
      font-size: 0.875rem;
      color: #4f4f4f;
      border-radius: 1rem;
      transition: 0.3s;

      &:last-of-type {
        margin-block-end: 0;
      }

      :hover {
        background: #ccc;
      }

      img {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 0.625rem;
      }
    }
  }

  .guests {
    max-width: 450px;
    padding-inline: 1.625rem;
  }
`
