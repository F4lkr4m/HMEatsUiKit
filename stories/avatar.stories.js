import {Avatar} from "../src/components/avatar/avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      options: ['sm', 'md', 'bg'],
      control: {type: 'inline-radio'},
    },
  }
}

export const Default = (args) => {
  const block = new Avatar(args);
  return block.render();
}

Default.args = {
  img: 'https://upload.wikimedia.org/wikipedia/ru/4/4c/Neo2.jpg',
  size: 'md',
  input: false,
}

export const Small = (args) => {
  const block = new Avatar(args);
  return block.render();
}

Small.args = {
  img: 'https://upload.wikimedia.org/wikipedia/ru/4/4c/Neo2.jpg',
  size: 'sm',
  input: false,
}

export const Big = (args) => {
  const block = new Avatar(args);
  return block.render();
}

Big.args = {
  img: 'https://upload.wikimedia.org/wikipedia/ru/4/4c/Neo2.jpg',
  size: 'bg',
  input: false,
}

export const InputAvatar = (args) => {
  const block = new Avatar(args);
  return block.render();
}

InputAvatar.args = {
  img: 'https://upload.wikimedia.org/wikipedia/ru/4/4c/Neo2.jpg',
  size: 'bg',
  input: true,
}