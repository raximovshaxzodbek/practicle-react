import React from "react";
import Navbar from "./components/Navbar";
import Router from "./components/router";
import "./assets/sass/main.scss";

export default function App() {
  return (
    <section>
      <main>
        <Navbar />
        <header>
          <Router />
        </header>
      </main>
    </section>
  );
}
