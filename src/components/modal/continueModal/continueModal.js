import styles from './continueModal.scss'
import continueModalTemplate from './continueModal.hbs'


export class ContinueModal {
  constructor({
    newRestaurantName = '',
    oldRestaurantName = '',
              }) {
    this.newRestaurantName = newRestaurantName;
    this.oldRestaurantName = oldRestaurantName;
  }

  render() {
    return continueModalTemplate({
      newRestaurantName: this.newRestaurantName,
      oldRestaurantName: this.oldRestaurantName,
    });
  }
}
