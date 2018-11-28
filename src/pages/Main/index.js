import React, { Component } from 'react';
import moment from 'moment';

import api from '../../services/api';

import logo from '../../assets/img/logo.svg';

import { Form, Container } from "./styles";

import CompareList from '../../components/CompareList';


class Main extends Component {
  state = {
    loading: false,
    repositoryError: false,
    repositoryInput: '',
    repositories: []
  }

  handleAddRepository = async (e) => {
    e.preventDefault();

    this.setState({ loading: true })

    try {
      const { data: repository } = await api.get(`/repos/${this.state.repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositoryInput: '',
        repositories: [...this.state.repositories, repository],
        repositoryError: false
      })
    } catch(err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false })
    }
  }

  render() {
    return(
      <Container>
        <img src={ logo } className="logo" alt="Github" />

        <Form withError={ this.state.repositoryError } onSubmit={ this.handleAddRepository }>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={ this.state.repositoryInput }
            onChange={ e => this.setState({ repositoryInput: e.target.value }) }
          />
          <button type="submit">{ this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK' }</button>
        </Form>

        <CompareList repositories={ this.state.repositories } />
      </Container>
    );
  }
}

export default Main;
