import styled from "styled-components";
const bgimage = require("../../../Assests/images/bgimage.jpg");

export const BackgroundDiv = styled.div`
  background-image: url(${bgimage.default});
  height: 100vh;
  width: 100%;
  background-size: cover;
  position: relative;
`;

export const LoginElement = styled.div`
  display: flex;
  flex-direction: row;
  width: 45%;
  justify-content: center;
  form {
    display: flex;
  }
  div {
    margin: 0.4rem 0.2rem;
  }
  button {
    margin: 0.8em 0.1em;
    width: 45%;
    margin-bottom:3px;
  }
  .loginbuttondiv{
    width: 32%;
    margin: 0 ;
  }
`;

export const MainHeading = styled.div`
  font-size: 2rem;
  position: absolute;
  top: 40%;
  left: 8%;
  width: 30rem;
  p {
    width: 80%;
    margin: 1rem 0;
    font-size: 0.7em;
  }
`;
