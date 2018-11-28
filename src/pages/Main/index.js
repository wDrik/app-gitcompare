import React from 'react';

import logo from '../../assets/img/logo.svg';

import { Form, Container } from "./styles";

import CompareList from '../../components/CompareList';

const Main = () => (
  <Container>
    <img src={ logo } className="logo" alt="Github" />

    <Form>
      <input type="text" placeholder="usuário/repositório" />
      <button type="submit">OK</button>
    </Form>

    <CompareList />
  </Container>
);

export default Main;
