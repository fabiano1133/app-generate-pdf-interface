import React from "react";
import { useLocation, Route, Router } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { Home } from "../src/components/Home/home";
import Form from "../src/components/Form/Form.jsx";

export default function Routes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="transition" timeout={500}>
        <Router location={location}>
          <Route index element={<Home />} />
          <Route path="/form" element={<Form />} />
        </Router>
      </CSSTransition>
    </TransitionGroup>
  );
}
