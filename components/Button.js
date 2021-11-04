import styles from './Button.module.scss'
import button from './Button.hbs'
import buttonWithIcon from './ButtonWithIcon.hbs'
import buttonIcon from './ButtonIcon.hbs'

export class Button {
  constructor({
                label,
                color = "black",
                shape = false,
                size = "md",
              }) {
    this.classes = [];
    this.label = label;

    if (shape) {
      this.classes.push(styles.button_shape_rounded);
    }
    switch (color) {
      case 'black':
        this.classes.push(styles.button_color_black);
        break;
      case 'green':
        this.classes.push(styles.button_color_green);
        break;
      case 'transparent':
        this.classes.push(styles.button_transparent);
        break;
      case 'white':
        this.classes.push(styles.button_color_white);
        break;
    }

    switch (size) {
      case 'sm':
        this.classes.push(styles.button_sm);
        break;
      case 'md':
        this.classes.push(styles.button_md);
        break;
      case 'bg':
        this.classes.push(styles.button_bg);
        break;
    }
  }

  render() {
    this.classes.push(styles.button);
    return button({
      classes: this.classes,
      label: this.label
    });
  };
}

export class ButtonWithIcon extends Button {
  constructor({
                label,
                color = "black",
                shape = false,
                size = "md",
                icon = "",
              }) {
    super({label, color, shape, size});
    this.icon = icon;
  }

  render() {
    this.classes.push(styles.button);
    return buttonWithIcon({
      classes: this.classes,
      label: this.label,
      icon: this.icon,
      icon_class: styles.button__icon_left,
    });
  }
}

export class ButtonIcon extends Button {
  constructor({
                color = "black",
                shape = false,
                icon = "",
              }) {
    super({label: '', color, shape, size: 'md'});
    this.label = '';
    this.icon = icon;
  }
  render() {
    this.classes.push(styles.buttonIcon);
    return buttonIcon({
      classes: this.classes,
      label: this.label,
      icon: this.icon,
    })
  }
}