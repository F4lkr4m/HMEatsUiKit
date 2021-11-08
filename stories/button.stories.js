import {Button, ButtonIcon} from "../src/components/button/Button"

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    rounded: {
      control: {type: 'boolean'},
    },
    color: {
      options: ['green', 'black', 'white', 'transparent'],
      control: {type: 'inline-radio'},
    },
    iconButtonColor: {
      options: ['gray', 'transparent'],
      control: {type: 'inline-radio'},
    },
    size: {
      options: ['sm', 'md', 'bg'],
      control: {type: 'inline-radio'},
    },
  }
}

export const SimpleButton = (args) => {
  const button = new Button(args);
  return button.render();
}


SimpleButton.args = {
  label: "Нажми на меня",
  color: "black",
  rounded: true,
  size: "md",
}


export const ButtonWithIcon = (args) => {
  const button = new Button(args);
  return button.render();
}

ButtonWithIcon.args = {
  label: "Нажми на меня",
  color: "black",
  rounded: true,
  size: "md",
  icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5579 5.53423C12.6873 4.69887 11.3128 4.69887 10.4422 5.53423L5.8158 9.97357C5.70245 10.0823 5.6262 10.224 5.59787 10.3785C5.04373 13.4004 5.00283 16.494 5.47687 19.5295L5.58939 20.25H8.56585V14.0387C8.56585 13.6244 8.90164 13.2887 9.31585 13.2887H14.6843C15.0985 13.2887 15.4343 13.6244 15.4343 14.0387V20.25H18.4107L18.5232 19.5295C18.9973 16.494 18.9564 13.4004 18.4023 10.3785C18.3739 10.224 18.2977 10.0823 18.1843 9.97357L13.5579 5.53423ZM9.40369 4.45191C10.8546 3.05965 13.1455 3.05965 14.5964 4.45191L19.2229 8.89125C19.5634 9.21804 19.7925 9.64373 19.8777 10.108C20.4622 13.2956 20.5053 16.559 20.0053 19.7609L19.8245 20.9184C19.7498 21.3971 19.3375 21.75 18.853 21.75H14.6843C14.2701 21.75 13.9343 21.4142 13.9343 21V14.7887H10.0659V21C10.0659 21.4142 9.73007 21.75 9.31585 21.75H5.14712C4.66264 21.75 4.25035 21.3971 4.1756 20.9184L3.99484 19.7609C3.49479 16.559 3.53794 13.2956 4.12247 10.108C4.2076 9.64373 4.43668 9.21804 4.77725 8.89125L9.40369 4.45191Z" fill="black"/>\n' +
    '            </svg>',
}

export const ButtonIco = (args) => {
  const button = new ButtonIcon(args);
  return button.render();
}

ButtonIco.args = {
  iconButtonColor: "gray",
  icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5579 5.53423C12.6873 4.69887 11.3128 4.69887 10.4422 5.53423L5.8158 9.97357C5.70245 10.0823 5.6262 10.224 5.59787 10.3785C5.04373 13.4004 5.00283 16.494 5.47687 19.5295L5.58939 20.25H8.56585V14.0387C8.56585 13.6244 8.90164 13.2887 9.31585 13.2887H14.6843C15.0985 13.2887 15.4343 13.6244 15.4343 14.0387V20.25H18.4107L18.5232 19.5295C18.9973 16.494 18.9564 13.4004 18.4023 10.3785C18.3739 10.224 18.2977 10.0823 18.1843 9.97357L13.5579 5.53423ZM9.40369 4.45191C10.8546 3.05965 13.1455 3.05965 14.5964 4.45191L19.2229 8.89125C19.5634 9.21804 19.7925 9.64373 19.8777 10.108C20.4622 13.2956 20.5053 16.559 20.0053 19.7609L19.8245 20.9184C19.7498 21.3971 19.3375 21.75 18.853 21.75H14.6843C14.2701 21.75 13.9343 21.4142 13.9343 21V14.7887H10.0659V21C10.0659 21.4142 9.73007 21.75 9.31585 21.75H5.14712C4.66264 21.75 4.25035 21.3971 4.1756 20.9184L3.99484 19.7609C3.49479 16.559 3.53794 13.2956 4.12247 10.108C4.2076 9.64373 4.43668 9.21804 4.77725 8.89125L9.40369 4.45191Z" fill="black"/>\n' +
    '            </svg>'
}
