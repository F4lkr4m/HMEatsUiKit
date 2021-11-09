import styles from './contentBlock.scss'
import contentBlockTemplate from './contentBlock.hbs'

export class ContentBlock {
  constructor({
    content = []
              }) {
    this.content = content;
  }

  render() {
    return contentBlockTemplate({
      content: this.content,
    });
  }
}