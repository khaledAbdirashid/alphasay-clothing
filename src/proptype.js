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
