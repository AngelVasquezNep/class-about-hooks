import React from "react"

const Rules = () => (
  <details className="box">
    <summary>Reglas</summary>

    <div className="content">
      <ul>
        <li>Los hooks sólo pueden ser usados en Function Components</li>
        <li>Siempre llamar hooks en el nivel más alto del componente</li>
        <li>
          No declarar hooks dentro de loops, condiciones o funciones anidadas
        </li>
        <li>
          <p>
            Aunque no es una regla, es una fuerte recomendación que los{" "}
            <i>custom hooks</i> lleven el prefijo <strong>use</strong>
          </p>
          <p>Ejemplo:</p>

          <ul>
            <li>
              <strong>use</strong>Form
            </li>
            <li>
              <strong>use</strong>Debounce
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </details>
)

export default Rules
