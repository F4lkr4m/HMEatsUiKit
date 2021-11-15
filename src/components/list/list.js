import styles from './list.scss'
import listTemplate from './list.hbs'
import {ButtonIcon, ButtonIconV} from "../button/button";
import {ButtonIcoV} from "../../../stories/button.stories";

export class List {
  constructor({
                listTitle = '',
                objList,
                buttons = [],
              }) {
    this.objList = objList;
    this.listTitle = listTitle;
    this.buttons = buttons;
  }

  render() {
    return listTemplate({
        content: this.objList,
        listTitle: this.listTitle,
        buttons: this.buttons,
    });
  }
}