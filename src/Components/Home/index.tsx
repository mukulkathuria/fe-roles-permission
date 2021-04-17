import React from "react";
import Login from "../Login";
import { BackgroundDiv, LoginElement, MainHeading } from "./Style";

const HomePage: React.FC = React.memo(() => {
  return (
    <BackgroundDiv>
      <LoginElement>
        <Login />
      </LoginElement>
      <MainHeading>
        <h2>Welcome to my Project</h2>
        <p>
          There you can see how to implement roles and permission in react & how
          private routing works.
        </p>{" "}
        <p>
          There I am using React with Typescript using my own bolierplate. In
          Server Side I am Using NestJs GraphQl and AJV for validations
        </p>
      </MainHeading>
    </BackgroundDiv>
  );
});
export default HomePage;
