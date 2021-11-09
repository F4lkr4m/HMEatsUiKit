import styles from './dishModal.scss'
import dishModalTemplate from './dishModal.hbs'
import {CheckboxGroup} from "../../../forms/tickForms/checkboxGroup/checkboxGroup";
import {RadioGroup} from "../../../forms/tickForms/radioGroup/radioGroup";

export class DishModal {
  constructor({
    img = '',
    name = '',
    desc = '',
    cost = 0,
    ingredients = [],
    radios = [],
              }) {
    this.img = img;
    this.name = name;
    this.desc = desc;
    this.cost = cost;
    this.ingredients = ingredients ? ingredients : [];
    this.radios = radios ? radios : [];
    this.number = 1;
  }

  render() {
    const checkboxes = [];
    this.ingredients.forEach((item) => {
      checkboxes.push({
        id: item.id,
        name: item.name,
        cost: item.cost + ' ₽',
        checked: false,
      });
    });
    const cg = new CheckboxGroup({
      groupTitle: checkboxes.length !== 0? 'Хотите добавить ингредиенты?' : '',
      checkboxes: checkboxes,
    }).render();


    const radios = this.radios.reduce((prev, item) => {
      const rg = new RadioGroup({
        groupTitle: item.name,
        radioName: item.id,
        id: item.id,
        radios: item.opt,
      });
      prev += rg.render();
      return prev;
    }, '');

    return dishModalTemplate({
      img: this.img,
      name: this.name,
      desc: this.desc,
      cost: this.cost,
      checkboxGroup: cg,
      radiosGroup: radios,
    });
  }

  remove() {

  }
}