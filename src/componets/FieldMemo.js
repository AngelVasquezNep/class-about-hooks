import React from "react"

const Field = React.memo(({ value, handleChange, label }) => (
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
))

export default Field
