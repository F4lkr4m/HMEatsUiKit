import styles from './card.scss'
import cardModalTemplate from './card.hbs'

export class Card {
  constructor({
                sumCost = 0,
              }) {
    this.sumCost = sumCost;
  }

  render() {
    return cardModalTemplate({sumCost: this.sumCost});
  }
}