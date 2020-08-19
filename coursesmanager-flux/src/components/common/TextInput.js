import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ id, label, name, value, onChange, error }) => {
  let wrapperClass = "form-group";
  if (error.length > 0) wrapperClass += " has-error";
  return (
    <div className={wrapperClass}>
      <label htmlFor={id}>{label}</label>
      <div className="field">
        <input
          id={id}
          name={name}
          type="text"
          className="form-control"
          onChange={onChange}
          value={value}
        />
      </div>
      {error.length > 0 && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
};

TextInput.defaultProps = {
  error: "",
};

export default TextInput;
