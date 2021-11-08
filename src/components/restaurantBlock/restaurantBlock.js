import styles from './restaurantBlock.scss'
import restaurantBlockTemplate from './restaurantBlock.hbs'

export class RestaurantBlock {
  constructor({
    id = "",
    img = "",
    name = "",
    costFFD = "",
    minDTime = "",
    maxDTime = "",
    rate = "",
  }) {
    this.id = id;
    this.img = img;
    this.name = name;
    this.costFFD = costFFD;
    this.minDTime = minDTime;
    this.maxDTime = maxDTime;
    this.rate = rate;
  }

  render() {
    return restaurantBlockTemplate({
      id: this.id,
      img: this.img,
      name: this.name,
      costFFD: this.costFFD,
      minDTime: this.minDTime,
      maxDTime: this.maxDTime,
      rate: this.rate,
    });
  }
}