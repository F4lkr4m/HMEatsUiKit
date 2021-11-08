import styles from './contentBlock.scss'
import contentBlockTemplate from './contentBlock.hbs'

export class ContentBlock {
  constructor(props) {
  }

  render() {
    return contentBlockTemplate();
  }
}