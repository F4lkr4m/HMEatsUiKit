import {Checkbox} from "../src/forms/tickForms/checkbox/checkbox";

export default {
  title: "Forms/Checkbox",
  component: Checkbox,
}

export const Default = (args) => {
  const cb = new Checkbox(args);
  return cb.render();
}

Default.args = {
  name: 'Добавить картошечку?',
  price: '11 ₽',
  checked: false,
}

export const Checked = (args) => {
  const cb = new Checkbox(args);
  return cb.render();
}

Checked.args = {
  name: 'Добавить картошечку?',
  price: '11 ₽',
  checked: true,
}
