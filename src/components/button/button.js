import './button.scss'
import button from './button.hbs'
import buttonIcon from './buttonIcon.hbs'
import buttonIconV from './buttonIconV.hbs'

export class Button {
  constructor({
                label,
                color = "black",
                rounded = false,
                size = "md",
                icon = '',
                classes = [],
              }) {
    this.size = size;
    this.rounded = rounded;
    this.color = color;
    this.label = label;
    this.classes = classes;
    if (icon !== '') {
      this.icon = icon;
    }
  }

  render() {
    return button({
      color: this.color,
      size: this.size,
      rounded: this.rounded,
      label: this.label,
      icon: this.icon,
      classes: this.classes,
    });
  };
}

export class ButtonIcon {
  constructor({
                iconButtonColor = "gray",
                icon = '',
                classes = [],
              }) {
    this.color = iconButtonColor;
    this.icon = icon;
    this.classes = classes;
  }

  render() {
    return buttonIcon({
      color: this.color,
      icon: this.icon,
      classes: this.classes,
    })
  }
}

export class ButtonIconV {
  constructor({
                label = '',
                icon = '',
                classes = [],
              }) {
    this.label = label;
    this.icon = icon;
    this.classes = classes;
  }

  render() {
    return buttonIconV({
      label: this.label,
      icon: this.icon,
      classes: this.classes,
    });
  }
}