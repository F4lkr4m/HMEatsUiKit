import styles from '../tickForm.scss'
import checkboxTemplate from './radio.hbs'

export class Radio {
  constructor({
                name = "",
                cost = "",
                checked = false,
                id = "",
                radioName = "",
              }) {
    this.name = name;
    this.cost = cost;
    this.checked = checked;
    this.id = id;
    this.radioName = radioName;
  }

  render() {
    return checkboxTemplate({
        name: this.name,
        cost: this.cost,
        checked: this.checked,
        id: this.id,
        radioName: this.radioName,
      }
    );
  }
}