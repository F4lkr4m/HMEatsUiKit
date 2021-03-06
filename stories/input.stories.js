import {Input} from "../src/forms/input/input";
import {AllInputs} from "../src/forms/input/input";

export default {
  title: "Forms/Inputs",
  component: Input,
  argTypes: {
    borderRadius: {
      options: ['std', 'medium', 'high'],
      control: {type: 'inline-radio'}
    }
  }
}

export const input = (args) => {
  const input = new Input(args);
  return input.render();
};

input.args = {
  label: '',
  placeholder: 'Имя любимое мое - твое именно',
  border: false,
  borderRadius: '',
  type: 'password',
  classes: ['kekew'],
}

export const allInputs = (args) => AllInputs(args);

allInputs.args = {}

export const textField = (args) => {
  const input = new Input(args);
  return input.render();
}

textField.args = {
  label: '',
  placeholder: 'Имя любимое мое - твое именно',
  border: true,
  borderRadius: '',
  type: 'text',
}