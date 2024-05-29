import { buttonPropTypes } from "../../../proptype";
import {
  BaseButton,
  GoogleSignInButton,
  NormalButton,
  InvertedButton,
} from "./button.styles.js";

const BUTTON_TYPES_COMPONENT = {
  base: BaseButton,
  google: GoogleSignInButton,
  inverted: InvertedButton,
  normal: NormalButton,
};

function Button({ children, buttonType, ...otherProps }) {
  const ButtonComponent = BUTTON_TYPES_COMPONENT[buttonType] || BaseButton;
  return <ButtonComponent {...otherProps}>{children}</ButtonComponent>;
}

Button.propTypes = buttonPropTypes;
export default Button;
