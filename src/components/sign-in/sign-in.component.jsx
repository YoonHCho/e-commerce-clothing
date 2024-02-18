import { Component } from "react";
import { FormInput } from "../form-input/form-input.component";
import { CustomButton } from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });

  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  }

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit} autoComplete="off">
          <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} label="E-mail" required/>
          <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} label="Password" required autoComplete="false"/>

          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Google Sign In</CustomButton>
          </div>
        </form>

      </div>
    )
  }

}