import React, {PropTypes} from 'react';

const TextInput = ({name, label, onChange, placeholder, value, error}) => {
  let wrapperClass = 'form-group';
  if(error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="form-control"
        />
        {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
