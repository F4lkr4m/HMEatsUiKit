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
    const content = this.objList.reduce((prev, item) => {
      prev += item.render();
      return prev;
    }, '');
    return listTemplate({
        content: content,
        listTitle: this.listTitle,
    });
  }
}