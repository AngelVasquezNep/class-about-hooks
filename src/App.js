import React from "react"

import Rules from "./componets/Rules"
import Examples from "./componets/Examples"

import "./App.css"

const App = () => (
  <div className="container">
    <section className="section">
      <header>
        <h1 className="title">Hello World</h1>
      </header>
    </section>

    <section className="section">
      <Rules />
      <Examples />
    </section>
  </div>
)

export default App
