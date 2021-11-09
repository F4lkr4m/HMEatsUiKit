import styles from './input.scss'
import InputTemplate from './input.hbs'
import AllInputsTemplate from './allInputs.hbs'

export class Input {
  constructor({
                label,
                placeholder,
                border = false,
                borderRadius = '',
                type = 'text',
                classes = [],
              }) {
    this.border = border;
    this.type = type;
    this.placeholder = placeholder;
    this.label = label;
    this.classes = classes;
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
      type: this.type,
      classes: this.classes,
    });
  };
}

export function AllInputs() {
  return AllInputsTemplate();
}