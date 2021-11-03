import Button from "../components/Button"

export default {
  title: "UI/Button",
  component: Button,
  argTypes: {
    shape: {
      control: {type: 'boolean'},
    },
    color: {
      options: ['green', 'black', 'white', 'transparent'],
      control: {type: 'inline-radio'},
    },
  }
}

const Template = (args) => Button(args);

export const Simple = Template.bind({})
Simple.args = {
  label: "Press Me",
  color: "green",
  shape: true
}

export const Black = Template.bind({})
Black.args = {
  label: "Press Me",
  color: "black",
  shape: false
}
