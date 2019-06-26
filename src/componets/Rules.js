import React from "react"

const Rules = () => (
  <details className="box">
    <summary>Reglas</summary>

    <div className="content">
      <ul>
        <li>Sólo llamar hooks en el nivel más alto</li>
        <li>
          No llamar hooks dentro de loops, condiciones o funciones anidadas
        </li>
      </ul>
    </div>
  </details>
)

export default Rules
