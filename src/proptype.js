import PropTypes from "prop-types";

export const categoriesPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired
);

export const categoryItemPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
}).isRequired;

export const formInputPropTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export const buttonPropTypes = {
  children: PropTypes.node.isRequired,
  buttonType: PropTypes.oneOf(["google", "inverted", "normal"]).isRequired,
};

export const contextPropTypes = {
  children: PropTypes.node.isRequired,
};

export const productCardPropTypes = PropTypes.shape({
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}).isRequired;

export const cartItemPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
}).isRequired;

export const categoryPreviewPropTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
