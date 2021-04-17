export type initials = {
  username: string;
  password: string;
};

export const initialValues: initials = {
  username: "",
  password: "",
};

type errorType = {
  username?: string;
  password?: string;
};

export const validate: (values: initials) => errorType = (values: initials) => {
  const error: errorType = {};
  if (!values.username) {
    error.username = "Please specify valid username";
  }
  if (!values.password) {
    error.password = "Password field cant be empty";
  } else if (values.password.length <= 3) {
    error.password = "Password length cant be less than 3 char";
  }
  return error;
};
