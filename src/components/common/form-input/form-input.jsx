import { formInputPropTypes } from "../../../proptype";
import { ErrorMessage, FormGroup, FormLabel, Input } from "./form-input.styles";

function FormInput({ label, type, id, register, error }) {
  return (
    <FormGroup>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input type={type} id={id} {...register(id, { required: true })} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FormGroup>
  );
}

FormInput.propTypes = formInputPropTypes;
export default FormInput;
