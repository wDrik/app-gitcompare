import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;

  img.logo {
    width: 100%;
    max-width: 80px;
    opacity: .6;
  }
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #FFF;
    font-size: 18px;
    color: #444;
    border-radius: 4px;

    border: ${ props => (props.withError ? '2px solid red' : 0) };
  }

  button {
    width: 80px;
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: #63f5b8;
    color: #FFF;
    border: 0;
    font-size: 20px;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;
    transition: all ease-in-out .4s;

    &:hover {
      background: #52d89f;
    }
  }
`;
