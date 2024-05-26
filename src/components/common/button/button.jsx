import { buttonPropTypes } from "../../../proptype";
import "./button.scss";
const BUTTON_TYPES_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
  normal: "normal",
};

function Button({ children, buttonType, ...otherProps }) {
  return (
    <button
      className={`${BUTTON_TYPES_CLASSES[buttonType]} button-container`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

Button.propTypes = buttonPropTypes;
export default Button;
