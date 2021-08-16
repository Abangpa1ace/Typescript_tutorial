import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid lightblue;

  div {
    flex: 1;
  }

  .information, .buttons {
    display: flex;
    justify-content: space-between;

  }

  img {
    width: 80px;
    object-fit: cover;
    margin-left: 40px;
  }
`;