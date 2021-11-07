import {Radio} from "../components/radio/radio";

export default {
  title: "Forms/Radio",
  component: Radio,
}

export const Default = (args) => {
  const rb = new Radio(args);
  return rb.render();
}

Default.args = {
  name: 'Добавить картошечку?',
  price: '11 ₽',
  checked: false,
}

export const Checked = (args) => {
  const rb = new Radio(args);
  return rb.render();
}

Checked.args = {
  name: 'Добавить картошечку?',
  price: '11 ₽',
  checked: true,
}