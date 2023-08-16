import type { Component } from 'solid-js';
import { Route, Routes,A } from "@solidjs/router";
import { Users } from "./pages/Users";
import { Container as ContainerStyle } from "solid-bootstrap";
import {Header} from "./partials/Header";

  const App: Component = () => {
  return (
    <>
      <ContainerStyle class="justify-content-center  bg-dark">

      <Header/>
      <nav>
        <A href="/users">User</A>
      {'   '}
        <A href="/home">Home</A>
      </nav>
      <Routes>
        <Route
          path="/home"
          element={<div>This site was made with Solid</div>}
          />
        <Route path="/users" component={Users} />
      </Routes>
          </ContainerStyle>
    </>
  );
};

export default App;
