import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import { Formik, Form, FormikHelpers } from "formik";
import FormControl from "../FormControl";
import { registerTypes, initialValues, validate } from "./Controls";
// import { registerUser } from "../../services/signUp.services";

const SignUpForm = () => {
  const history = useHistory();

  const onSubmitting = async (
    values: registerTypes,
    submitprops: FormikHelpers<registerTypes>
  ) => {
    try {
      //   const user = await registerUser(values);
      history.push("/");
    } catch (err) {
      submitprops.setSubmitting(false);
      if (!err.response) {
        submitprops.resetForm();
      }
      submitprops.setFieldError("email", err.response.data.error);
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
            name="name"
            type="text"
            placeholder="Name"
          />
          <FormControl
            control="input"
            name="username"
            type="text"
            placeholder="Username"
          />
          <FormControl
            control="input"
            name="email"
            type="email"
            placeholder="Email"
            autoComplete="new-password"
          />
          <FormControl
            control="input"
            name="password"
            type="password"
            placeholder="Password"
          />
          <div className="small">
            Make sure it's at least 15 characters OR at least 8 characters
            including a number and a lowercase letter
          </div>
          <button
            type="submit"
            disabled={!formik.isValid || formik.isSubmitting}
          >
            {formik.isSubmitting ? "Signing Up..." : "Sign up"}
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default withRouter(SignUpForm);
