import Fonts from '../components/fonts/fonts';
import {Input} from "../components/input/input";
import {AllInputs} from "../components/input/input";

export default {
  title: "UI/Inputs",
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

