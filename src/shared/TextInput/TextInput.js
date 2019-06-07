import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ id, label, name, onChange, value, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <br />
      <input
        className="form-control"
        id={id}
        type="text"
        name={name}
        onChange={onChange}
        value={value}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  /** The HTML ID */
  id: PropTypes.string.isRequired,

  /** The Form label */
  label: PropTypes.string.isRequired,

  /** Error to display */
  error: PropTypes.string,

  /** The input name */
  name: PropTypes.string.isRequired,

  /** Function called onChange */
  onChange: PropTypes.func.isRequired,

  /** Input value */
  value: PropTypes.string.isRequired
};

export default TextInput;
