import styled from 'styled-components'

export const Container = styled.label`
  max-width: 450px;
  flex-grow: 1;
  padding: 0.75rem 1.625rem;
  font-size: 0.875rem;
  font-weight: bold;
  background: #efefef;
  border-radius: 1rem;
  border: 1px solid #e0e0e0;
  transition: 1s;

  &:focus-within {
    border: 1px solid #333;
  }

  input {
    display: block;
    width: 100%;
    margin-block-start: 4px;
    background: transparent;
    border: none;
    outline: none;
  }
`
