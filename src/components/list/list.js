import styles from './list.scss'
import listTemplate from './list.hbs'

export class List {
  constructor({
                listTitle = '',
                objList,
              }) {
    this.objList = objList;
    this.listTitle = listTitle;
  }

  render() {
    return listTemplate({
        content: this.objList,
        listTitle: this.listTitle,
    });
  }
}