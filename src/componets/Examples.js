import React from "react"

import Count from "./Count"

// const Field = React.memo(({ value, handleChange, label }) => (
//   <div className="field">
//     <div className="control">
//       <label className="label">
//         {label}
//         <input
//           type="text"
//           className="input"
//           value={value}
//           placeholder={label}
//           onChange={({ target }) => handleChange(target.value)}
//         />
//       </label>
//     </div>
//   </div>
// ))

const Field = ({ value, handleChange, label }) => (
  <div className="field">
    <div className="control">
      <label className="label">
        {label}
        <input
          type="text"
          className="input"
          value={value}
          placeholder={label}
          onChange={({ target }) => handleChange(target.value)}
        />
      </label>
    </div>
  </div>
)

const Examples = () => {
  const [value1, setValue1] = React.useState("")
  const [value2, setValue2] = React.useState("")
  const [value3, setValue3] = React.useState("")

  return (
    <details className="box" open>
      <summary>Rendered childrens</summary>

      <div className="content">
        <Field value={value1} handleChange={setValue1} label="Text 1" />
        <Field value={value2} handleChange={setValue2} label="Text 2" />
        <Field value={value3} handleChange={setValue3} label="Text 3" />

        <Count />
      </div>
    </details>
  )
}

export default Examples
