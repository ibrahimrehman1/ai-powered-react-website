import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Blogs from "../Components/Blog";
import Feedback from "../Components/Feedback";
import { Homepage } from "../Components/Home";

export default function Router() {
  const [content, setContent] = useState(
    "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, empus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
  );
  return (
    <>
      <Switch>
        <Route path="/home" component={() => <Homepage content={content} />} />
        <Route path="/blogs" component={() => <Blogs content={content} />} />
        <Route path="/feedback" component={Feedback} />
        <Redirect to="/home" />
      </Switch>
    </>
  );
}
