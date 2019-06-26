import React, { Fragment } from "react"

import { properties } from "../mocks"

import Field from "./FieldMemo"
import Count from "./Count"

const Field1 = ({ value, handleChange, label }) => {
  return (
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
}

const FieldsExample = () => {
  const [value1, setValue1] = React.useState("")
  const [value2, setValue2] = React.useState("")
  const [value3, setValue3] = React.useState("")

  return (
    <details className="box">
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

const CallBackExample = () => {
  const [value, setValue] = React.useState("")

  const handleChange = value => setValue(value)

  const handleChange1 = React.useCallback(handleChange, [setValue])
  return (
    <details className="box">
      <summary>Handles, refs and shallow comparison</summary>

      <div className="content">
        <Field value={value} handleChange={setValue} label="Text 1" />

        {/* Remember remove the thePropsAreEqual function */}
        <Count hi="Hi" />
        <Count hi="Hi" handleChange={handleChange} />
        <Count hi="Hi" handleChange={handleChange1} />
      </div>
    </details>
  )
}

const FilterMemoValues = () => {
  const [query, setQuery] = React.useState("")
  const [value, setValue] = React.useState("")

  const filteredProperties = properties.filter(({ id, title }) => {
    console.log("filters")
    return query ? `${id} - ${title}`.includes(query) : true
  })

  // const filteredProperties = React.useMemo(
  //   () =>
  //     properties.filter(({ id, title }) => {
  //       console.log("filters")
  //       return query ? `${id} - ${title}`.includes(query) : true
  //     }),
  //   [query]
  // )

  return (
    <details className="box">
      <summary>Handles, refs and shallow comparison</summary>

      <div className="content">
        <Field value={query} handleChange={setQuery} label="Filter Value" />
        <Field value={value} handleChange={setValue} label="Some Input" />

        <table className="table">
          <thead>
            <tr>
              <th>Index</th>
              <th>NEX-ID</th>
              <th>Title</th>
            </tr>
          </thead>

          <tbody>
            {filteredProperties.map(({ id, title }, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>NEX-{id}</td>
                <td>{title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </details>
  )
}

const Examples = () => (
  <div className="container">
    <FieldsExample />

    <CallBackExample />

    <FilterMemoValues />
  </div>
)

export default Examples
