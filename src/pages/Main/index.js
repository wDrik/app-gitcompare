import React, { Component } from 'react';
import api from '../../services/api';

import logo from '../../assets/img/logo.svg';

import { Form, Container } from "./styles";

import CompareList from '../../components/CompareList';


class Main extends Component {
  state = {
    repositoryInput: '',
    repositories: []
  }

  handleAddRepository = async (e) => {
    e.preventDefault();

    try {
      const response = await api.get(`/repos/${this.state.repositoryInput}`);

      this.setState({
        repositoryInput: '',
        repositories: [...this.state.repositories, response.data]
      })
    } catch(err) {
      console.log(err);
    }
  }

  render() {
    return(
      <Container>
        <img src={ logo } className="logo" alt="Github" />

        <Form onSubmit={ this.handleAddRepository }>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={ this.state.repositoryInput }
            onChange={ e => this.setState({ repositoryInput: e.target.value }) }
          />
          <button type="submit">OK</button>
        </Form>

        <CompareList repositories={ this.state.repositories } />
      </Container>
    );
  }
}

export default Main;
