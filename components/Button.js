import styles from './Button.module.scss'
import button from './Button.hbs'
import PropTypes from "prop-types"


function Button({label, color = "black", shape = ""}) {
  const classes = [styles.button]
  classes.push(styles);
  if (shape === "rounded") {
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
  console.log(classes);
  return button({classes: classes, label: label});
}

Button.propTypes = {
  label: PropTypes.string,
  color: PropTypes.oneOf(["green", "black", "white", "transparent"]),
  shape: PropTypes.oneOf(["common", "rounded"]),
}

export default Button