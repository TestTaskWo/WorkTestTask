import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/myInput";

const signUpScheme = Yup.object().shape({
  login: Yup.string()
    .min(2, "Too short!")
    .max(16, "Too long!")
    .required("Name is required"),
  password: Yup.string()
    .min(8, "Too short!")
    .max(25, "Too long!")
    .required("Password is required"),
});

const AuthForm = () => {
  return (
    <Formik
      initialValues={{ login: "check", password: "" }}
      validationSchema={signUpScheme}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form style={{ display: "flex", flexDirection: "column" }}>
          <Field
            id="login"
            name="login"
            placeholder="login"
            component={MyInput}
          />
          {errors.login && touched.login ? <div>{errors.login}</div> : null}
          <Field
            id="login"
            name="password"
            placeholder="password"
            component={MyInput}
          />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
          <MyButton disabled={false} title={"Авторизация"} type={"submit"} />
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
