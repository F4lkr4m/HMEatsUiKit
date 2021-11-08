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
}

export const allInputs = (args) => AllInputs(args);

allInputs.args = {}

