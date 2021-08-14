import styled from 'styled-components'

export const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: transparent;
  border: 1px solid lightblue;
  border-radius: 20px;

  img {
    height: 250px;
    object-fit: cover;
    object-position: top;
    border-radius: 20px 20px 0 0;
  }
  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
  button {
    border-radius: 0 0 20px 20px;
  }
`;