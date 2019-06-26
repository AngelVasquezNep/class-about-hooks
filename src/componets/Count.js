import React, { useState } from "react"

function thePropsAreEqual(prevProps, nexProps) {
  // return true if is unnecesary re-render the component
  return true
}

// const Count = React.memo(() => {
//   const [count, setCount] = useState(0)
//   const renders = React.useRef(0)

//   return (
//     <div className="content">
//       <ul>
//         <li>Renders {renders.current++}</li>
//         <li>Count: {count}</li>
//       </ul>

//       <button
//         className="button is-small"
//         onClick={() => setCount(count => count + 1)}
//       >
//         Increment
//       </button>
//     </div>
//   )
// })

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
