import React from "react"

import Count from "./Count"

const Examples = () => {
  const [value, setValue] = React.useState("")

  return (
    <details className="box" open>
      <summary>Ejemplos</summary>

      <div className="content">
        <div className="field">
          <div className="control">
            <label className="label">
              Random text
              <input
                type="text"
                className="input"
                value={value}
                onChange={({ target }) => setValue(target.value)}
              />
            </label>
          </div>
        </div>

        <Count />
      </div>
    </details>
  )
}

export default Examples
