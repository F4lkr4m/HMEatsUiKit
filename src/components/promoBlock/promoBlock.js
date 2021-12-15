import styles from './promoBlock.scss'
import promoBlockTemplate from './promoBlock.hbs'

export class PromoBlock {
  constructor(props) {
    this.name = props.name;
    this.desc = props.desc;
    this.restId = props.restId;
    this.img = props.img;
  }

  render() {
    return promoBlockTemplate({
      name: this.name,
      desc: this.desc,
      restId: this.restId,
      img: this.img,
    });
  }
}
