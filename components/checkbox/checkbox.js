import styles from './checkbox.scss'
import checkboxTemplate from './checkbox.hbs'

export class Checkbox {
  constructor({
    name = "",
    price = "",
    checked = false,
              }) {
    this.name = name;
    this.price = price;
    this.checked = checked;
  }

  render() {
    return checkboxTemplate({
        name: this.name,
        price: this.price,
        checked: this.checked,
      }
    );
  }
}