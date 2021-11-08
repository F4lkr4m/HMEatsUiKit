import './button.scss'
import button from './button.hbs'
import buttonIcon from './buttonIcon.hbs'

export class Button {
  constructor({
                label,
                color = "black",
                rounded = false,
                size = "md",
                icon = '',
              }) {
    this.size = size;
    this.rounded = rounded;
    this.color = color;
    this.label = label;
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
    });
  };
}

export class ButtonIcon {
  constructor({
                iconButtonColor = "gray",
                icon = '',
              }) {
    this.color = iconButtonColor;
    this.icon = icon;
  }

  render() {
    return buttonIcon({
      color: this.color,
      icon: this.icon,
    })
  }
}