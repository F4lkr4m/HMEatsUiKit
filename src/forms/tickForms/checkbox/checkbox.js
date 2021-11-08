import styles from '../tickForm.scss'
import checkboxTemplate from './checkbox.hbs'

export class Checkbox {
  constructor({
    name = "",
    price = "",
    checked = false,
    id = "",
              }) {
    this.name = name;
    this.price = price;
    this.checked = checked;
    this.id = id;
  }

  render() {
    return checkboxTemplate({
        name: this.name,
        price: this.price,
        checked: this.checked,
        id: this.id,
      }
    );
  }
}