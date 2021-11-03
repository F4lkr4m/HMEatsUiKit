import Button from "../components/Button"

export default {
  title: "UI/Button",
  component: Button,
  argTypes: {
    shape: {
      options: ['common', 'rounded'],
      control: {type: 'inline-radio'},
    },
    color: {
      options: ['green', 'black', 'white', 'transparent'],
      control: {type: 'inline-radio'},
    }
  }
}

const Template = (args) => Button(args);

export const Simple = Template.bind({})
Simple.args = {
  label: "Press Me",
  color: "green",
  shape: "rounded"
}
