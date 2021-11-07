import styles from './input.scss'
import InputTemplate from './input.hbs'
import AllInputsTemplate from './allInputs.hbs'

export class Input {
  constructor({
                label,
                placeholder,
                border = false,
                borderRadius = '',
              }) {
    this.border = border;
    this.placeholder = placeholder;
    this.label = label;
    if (borderRadius !== '') {
      this.borderRadius = borderRadius;
    }
  }

  render() {
    return InputTemplate({
      border: this.border,
      label: this.label,
      borderRadius: this.borderRadius,
      placeholder: this.placeholder,
    });
  };
}

export function AllInputs() {
  return AllInputsTemplate();
}