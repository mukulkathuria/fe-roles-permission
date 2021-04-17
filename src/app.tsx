import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MyDiv } from "./app.style";
import HomePage from "./Components/Home";

const App: React.FC = () => {
  return (
    <MyDiv>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </MyDiv>
  );
};
export default App;
