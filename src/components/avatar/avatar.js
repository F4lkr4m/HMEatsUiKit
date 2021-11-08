import styles from './avatar.scss'
import avatarTemplate from './avatar.hbs'

export class Avatar {
  constructor({
    img = '',
    size = 'md',
    input = false,
              }) {
    this.img = img;
    this.size = size;
    this.input = input;
  }

  render() {
    return avatarTemplate({
      img: this.img,
      size: this.size,
      input: this.input,
    });
  }
}