import styles from './dishBlock.scss'
import dishBlockTemplate from './dishBlock.hbs'

export class DishBlock {
  constructor({
                id = "",
                img = "",
                name = "",
                cost = "",
                ccal = "",
              }) {
    this.id = id;
    this.img = img;
    this.name = name;
    this.cost = cost;
    this.ccal = ccal;
  }

  render() {
    return dishBlockTemplate({
      id: this.id,
      img: this.img,
      name: this.name,
      cost: this.cost,
      ccal: this.ccal,
    });
  }
}