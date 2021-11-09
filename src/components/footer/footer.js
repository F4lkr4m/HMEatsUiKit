import styles from './footer.scss'
import footerTemplate from './footer.hbs'

export class Footer {
  constructor({
                nav = [],
              }) {
    this.nav = nav;
  }

  render() {
    return footerTemplate({nav: this.nav});
  }
}