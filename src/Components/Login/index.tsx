import React from "react";
import { Formik, Form, FormikHelpers } from "formik";
import { Link, useHistory } from "react-router-dom";
import FormControl from "../FormControl";
import { initialValues, validate, initials } from "./Controls";
import { getLogin } from "../../Services/Login";
import { LoginButtonDiv, StyledButton } from "./Style";

const SignInForm = () => {
  const history = useHistory();

  const onSubmitting = async (
    values: initials,
    submitprops: FormikHelpers<initials>
  ) => {
    try {
      const user = await getLogin(values);
      history.push("/");
    } catch (err) {
      submitprops.setSubmitting(false);
      if (!err.response) {
        submitprops.resetForm();
      }
      submitprops.setFieldError("username", err.response.data.error);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmitting}
    >
      {(formik) => (
        <Form>
          <FormControl
            control="input"
            name="username"
            type="text"
            placeholder="username or email"
            autoComplete="new-password"
          />
          <FormControl
            control="input"
            name="password"
            type="password"
            placeholder="Password"
          />
          <LoginButtonDiv className="loginbuttondiv">
            <StyledButton
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              {formik.isSubmitting ? "Login in.." : "Log in"}
            </StyledButton>
            <p>
              Don't have an account? <Link to="/"> Sign Up</Link>
            </p>
          </LoginButtonDiv>
        </Form>
      )}
    </Formik>
  );
};
export default SignInForm;
