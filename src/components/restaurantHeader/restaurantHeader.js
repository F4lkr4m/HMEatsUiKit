import styles from './restaurantHeader.scss'
import restaurantHeaderTemplate from './restaurantHeader.hbs'

export class RestaurantHeader {
  constructor({
                restaurant,
              }) {
    this.restaurant = restaurant;
  }

  render() {
    return restaurantHeaderTemplate(this.restaurant);
  }
}