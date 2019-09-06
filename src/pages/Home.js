import React, { Component } from "react";
import axios from "axios";

import Header from "../components/Header";
import CardList from "../components/CardList";

const SERVER_URL = "https://reqres.in/api/login";

class Home extends Component {
  state = { data: [], loading: true };

  componentDidMount = () => {
    axios
      .get(SERVER_URL)
      .then(res => {
        this.setState({ data: res.data.data, loading: false });
      })
      .catch(err => {
        if (err.response && err.response.data) {
          this.setState({ loading: false });
          alert(err.response.data.error);
        } else {
          console.error(err);
        }
      });
  };

  render() {
    if (this.state.loading) {
      return (
        <div style={{ padding: "1rem 2rem" }}>
          <Header />
          <h2>Loading...</h2>
        </div>
      );
    } else {
      return (
        <div style={{ padding: "1rem 2rem" }}>
          <Header />
          <CardList data={this.state.data} />
        </div>
      );
    }
  }
}

export default Home;
