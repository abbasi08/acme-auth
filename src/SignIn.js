import React from "react";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      error: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }
  async onSubmit(ev) {
    ev.preventDefault();
    const { username, password } = this.state;
    try {
      this.props.signIn({
        username,
        password,
      });
    } catch (ex) {
      this.setState({ error: ex.reponse.data.error });
    }
  }
  render() {
    const { onChange, onSubmit } = this;
    const { username, password } = this.state;
    return (
      <form onSubmit={onSubmit}>
        Username:
        <input value={username} onChange={onChange} name="username" />
        Password:
        <input value={password} onChange={onChange} name="password" />
        <button>Sign In</button>
      </form>
    );
  }
}

export default SignIn;
