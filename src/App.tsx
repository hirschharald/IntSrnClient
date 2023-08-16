import type { Component } from 'solid-js';
import { Route, Routes,A } from "@solidjs/router";
import { Users } from "./pages/Users";

  const App: Component = () => {
  return (
    <>
      <h1>IntSrn Client</h1>
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
    </>
  );
};

export default App;
