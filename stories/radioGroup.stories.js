import {RadioGroup} from "../src/forms/tickForms/radioGroup/radioGroup";

export default {
  title: "Forms/RadioGroup",
  component: RadioGroup,
}

export const Default = (args) => {
  const radioGroup = new RadioGroup(args);
  return radioGroup.render();
}

Default.args ={
  groupTitle: "Выберите соус!",
  radioName: "Sauce",
  radios: [
    {
      id: "1",
      name: 'Добавить картошечку?',
      price: '11 ₽',
      checked: false,
    },
    {
      id: "2",
      name: 'Добавить картошечку?',
      price: '11 ₽',
      checked: false,
    },
    {
      id: "3",
      name: 'Добавить картошечку?',
      price: '',
      checked: false,
    },
  ],
}