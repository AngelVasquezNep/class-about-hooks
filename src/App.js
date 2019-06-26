import React from "react"

import Rules from "./componets/Rules"
import Theory from "./componets/Theory"
import Examples from "./componets/Examples"

import "./App.css"

const App = () => (
  <div className="">
    <section className="hero is-primary">
      <header className="hero-body">
        <div className="container">
          <h1 className="title">Hello Hooks</h1>
        </div>
      </header>
    </section>

    <section className="section">
      <div className="container">
        <Rules />
        <Theory />
        <Examples />
      </div>
    </section>
  </div>
)

export default App
