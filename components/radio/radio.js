import styles from './radio.scss'
import checkboxTemplate from './radio.hbs'

export class Radio {
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