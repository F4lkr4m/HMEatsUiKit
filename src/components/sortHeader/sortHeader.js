import styles from './sortHeader.scss'
import sortHeader from './sortHeader.hbs'

export class SortHeader {
  constructor({
                buttons = []
              }) {
    this.buttons = buttons;
  }

  render() {
    return sortHeader({buttons: this.buttons});
  }
}