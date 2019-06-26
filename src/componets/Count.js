import React, { useState } from "react"

const Count = () => {
  const [count, setCount] = useState(0)
  const renders = React.useRef(0)

  return (
    <div className="content">
      <ul>
        <li>Renders {renders.current++}</li>
        <li>Count: {count}</li>
      </ul>

      <button
        className="button is-small"
        onClick={() => setCount(count => count + 1)}
      >
        Increment
      </button>
    </div>
  )
}

export default Count
