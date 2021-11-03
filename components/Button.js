import styles from './Button.module.scss'
import button from './Button.hbs'
import PropTypes from "prop-types"


function Button({label, color = "black", shape = false}) {
  const classes = [styles.button]

  if (shape) {
    classes.push(styles.button_shape_rounded);
  }
  switch (color) {
    case 'black':
      classes.push(styles.button_color_black);
      break;
    case 'green':
      classes.push(styles.button_color_green);
      break;
    case 'transparent':
      classes.push(styles.button_transparent);
      break;
    case 'white':
      classes.push(styles.button_color_white);
      break;
  }
  return button({classes: classes, label: label});
}
//
// Button.propTypes = {
//   label: PropTypes.string,
//   color: PropTypes.oneOf(["green", "black", "white", "transparent"]),
//   shape: PropTypes.bool,
// }

export default Button