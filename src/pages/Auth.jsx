import { useState } from "react";
import AuthForm from "../components/AuthForm";
import RegisterForm from "../components/RegisterForm";
import Tabs from "../components/UI/tabs/Tabs";
import { mainTabs } from "../constants/constants";

const Auth = () => {
  const [toggleForm, setToggleForm] = useState(0);
  return (
    <div className="authPageBlock">
      <h1>Please choose way?</h1>
      <Tabs tabsNames={mainTabs} callback={setToggleForm} />
      {toggleForm === 0 ? <AuthForm /> : <RegisterForm />}
    </div>
  );
};

export default Auth;
