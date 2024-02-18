import { SignIn } from "../../components/sign-in/sign-in.component";
import { SignUp } from "../../components/sign-up/sign-up.component";

import "./sign-in-and-up.styles.scss";

export const SignInAndUpPage = () => (
  <div className="sign-in-and-up">
    <SignIn />
    <SignUp />
  </div>
)