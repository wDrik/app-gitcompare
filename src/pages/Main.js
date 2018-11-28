import React from 'react';
import styled from 'styled-components';

import logo from '../assets/img/logo.svg';

const Container = styled.div`
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

const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #FFF;
    border: 0;
    font-size: 18px;
    color: #444;
    border-radius: 4px;
  }

  button {
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
  }
`;

const Main = () => (
  <Container>
    <img src={ logo } className="logo" alt="Github" />

    <Form>
      <input type="text" placeholder="usuário/repositório" />
      <button type="submit">OK</button>
    </Form>
  </Container>
);

export default Main;
