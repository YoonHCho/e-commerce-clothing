import { Component } from "react";
import { FormInput } from "../form-input/form-input.component";
import { CustomButton } from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { signInWithEmailAndPassword } from "firebase/auth";

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

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      if (error.code === 'auth/invalid-credential') {
        alert("Your email/password doesn't match");
      }
      console.error(error);
    }
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