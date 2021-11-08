import {CheckboxGroup} from "../src/forms/tickForms/checkboxGroup/checkboxGroup";

export default {
  title: "Forms/CheckboxGroup",
  component: CheckboxGroup,
}

export const Default = (args) => {
  const cbgr = new CheckboxGroup(args);
  return cbgr.render();
}

Default.args = {
  groupTitle: "Выберите ингридиенты!",
  checkboxes: [
    {
      id: '1',
      name: 'Добавить картошечку?',
      price: '11 ₽',
      checked: false,
    },
    {
      id: '2',
      name: 'Добавить картошечку?',
      price: '11 ₽',
      checked: false,
    },
    {
      id: '3',
      name: 'Добавить картошечку?',
      price: '11 ₽',
      checked: false,
    },
  ],
}