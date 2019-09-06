import React, { Component } from "react";
import axios from "axios";

const SERVER_URL = "https://reqres.in/api/login";

const DUMMY_DATA = {
  email: "example@email.com",
  password: "password"
};

class Login extends Component {
  state = { email: "", password: "" };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = { ...this.state };
    // If user data matches dummy data then
    // redirect to the home page
    if (
      data.email === DUMMY_DATA.email &&
      data.password === DUMMY_DATA.password
    ) {
      alert("Login Successful!");
      return this.props.history.push("/home");
    }

    axios
      .post(SERVER_URL, data)
      .then(res => {
        alert("Login Successful!");
        this.props.history.push("/home");
      })
      .catch(err => {
        if (err.response && err.response.data) {
          alert(
            `${err.response.data.error}\n Use email: example@email.com and password: password to login`
          );
        } else {
          console.error(err);
        }
      });
  };
  render() {
    return (
      <div className="is-fullheight">
        <h2 className="title is-size-2 has-text-centered ">Login Page</h2>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-centered">
                <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                  <form action="" className="box" onSubmit={this.handleSubmit}>
                    <div className="field">
                      <label htmlFor="" className="label">
                        Email
                      </label>
                      <div className="control has-icons-left">
                        <input
                          type="email"
                          placeholder="e.g. bobsmith@gmail.com"
                          className="input"
                          required
                          value={this.state.email}
                          name="email"
                          onChange={this.handleInputChange}
                        />
                        <span className="icon is-small is-left">
                          <i className="fa fa-envelope"></i>
                        </span>
                      </div>
                    </div>
                    <div className="field">
                      <label htmlFor="" className="label">
                        Password
                      </label>
                      <div className="control has-icons-left">
                        <input
                          type="password"
                          placeholder="*******"
                          className="input"
                          value={this.state.password}
                          required
                          name="password"
                          onChange={this.handleInputChange}
                        />
                        <span className="icon is-small is-left">
                          <i className="fa fa-lock"></i>
                        </span>
                      </div>
                    </div>

                    <div className="field">
                      <button type="submit" className="button is-success">
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
