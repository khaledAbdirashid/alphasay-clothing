import "./form-input.scss";
import { formInputPropTypes } from "../../../proptype";
import { useState } from "react";

function FormInput({ label, type, id, register, error }) {
  const [hasValue, setHasValue] = useState(false);

  const handleInputChange = (event) => {
    setHasValue(event.target.value !== "");
  };
  return (
    <div className="form-group">
      <input
        type={type}
        id={id}
        className="form-input"
        {...register(id, { required: true })}
        onChange={handleInputChange}
      />
      <label htmlFor={id} className={`form-label ${hasValue ? "shrink" : ""}`}>
        {label}
      </label>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
}

FormInput.propTypes = formInputPropTypes;
export default FormInput;
