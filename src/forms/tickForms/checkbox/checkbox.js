import styles from '../tickForm.scss'
import checkboxTemplate from './checkbox.hbs'

export class Checkbox {
  constructor({
    name = "",
    cost = "",
    checked = false,
    id = "",
              }) {
    this.name = name;
    this.cost = cost;
    this.checked = checked;
    this.id = id;
  }

  render() {
    return checkboxTemplate({
        name: this.name,
        cost: this.cost,
        checked: this.checked,
        id: this.id,
      }
    );
  }
}