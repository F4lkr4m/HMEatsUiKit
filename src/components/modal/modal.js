import styles from './modal.scss'
import modalTemplate from './modal.hbs'


export class Modal {
  constructor({
    title = '',
    topContent = [],
    centerContent = [],
    bottomContent = [],
              }) {
    this.topContent = topContent;
    this.centerContent = centerContent;
    this.bottomContent = bottomContent;
    this.title = title;
  }

  render() {
    return modalTemplate({
      title: this.title,
      topContent: this.topContent,
      centerContent: this.centerContent,
      bottomContent: this.bottomContent,
    });
  }
}
