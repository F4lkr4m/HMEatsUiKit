import {Navbar} from "../src/components/navbar/navbar";
import {Hamburger} from "../src/components/hamburger/hamburger";
import {Button} from "../src/components/button/button";

export default {
  title: "Components/Navbar",
  component: Navbar,
}

export const navbar = (args) => Navbar(args);

navbar.args = {
  buttons: [
    new Button({
      label: 'Зарегистрироваться',
      color: "green",
      rounded: true,
      size: "md",
      classes: ['navbar__hide'],
    }).render(),
    new Button({
      label: 'Войти',
      color: "white",
      rounded: true,
      size: "md",
      classes: ['navbar__hide'],
    }).render(),
  ],
  logo: 'https://hmeats-spaces.fra1.cdn.digitaloceanspaces.com/logo1.svg',
}

export const navbarLogged = (args) => Navbar(args);
navbarLogged.args = {
  buttons: [
    new Button({
      label: 'Корзина',
      color: "black",
      rounded: true,
      size: "md",
      icon: '<svg class="button__icon_left" width="20" height="20" viewBox="0 0 20 20" fill="none"\n' +
        '                         xmlns="http://www.w3.org/2000/svg">\n' +
        '                        <path fill-rule="evenodd" clip-rule="evenodd"\n' +
        '                              d="M18.1477 3.25H4.33514L3.15497 1.1346C3.0225 0.897154 2.7719 0.75 2.5 0.75H1C0.585786 0.75 0.25 1.08579 0.25 1.5C0.25 1.91421 0.585786 2.25 1 2.25H2.0596L3.22429 4.33765L5.91037 10.2809L5.91312 10.2869L6.14971 10.8104L3.45287 13.687C3.25895 13.8939 3.19825 14.1924 3.29599 14.4585C3.39372 14.7247 3.63317 14.913 3.91486 14.9452L6.37299 15.2261C9.44767 15.5775 12.5524 15.5775 15.627 15.2261L18.0852 14.9452C18.4967 14.8981 18.7922 14.5264 18.7452 14.1148C18.6981 13.7033 18.3264 13.4078 17.9149 13.4549L15.4567 13.7358C12.4952 14.0742 9.50481 14.0742 6.54331 13.7358L5.56779 13.6243L7.54717 11.513C7.56632 11.4925 7.5841 11.4713 7.60052 11.4494L8.35334 11.5474C9.40826 11.6847 10.4746 11.7116 11.5351 11.6277C14.0086 11.4321 16.301 10.2551 17.9015 8.35907L18.4795 7.67425C18.499 7.65125 18.517 7.62711 18.5335 7.60194L19.6109 5.96009C20.3745 4.79633 19.5397 3.25 18.1477 3.25ZM7.65627 9.94405C7.49086 9.92253 7.34823 9.81745 7.27858 9.66604L7.27725 9.66311L5.05674 4.75H18.1477C18.3466 4.75 18.4658 4.9709 18.3567 5.13716L17.3042 6.74123L16.7552 7.39152C15.4132 8.98139 13.4909 9.96832 11.4169 10.1324C10.4603 10.208 9.49842 10.1837 8.54688 10.0599L7.65627 9.94405Z"\n' +
        '                              fill="white"/>\n' +
        '                        <path d="M5.5 16.5C4.67157 16.5 4 17.1716 4 18C4 18.8284 4.67157 19.5 5.5 19.5C6.32843 19.5 7 18.8284 7 18C7 17.1716 6.32843 16.5 5.5 16.5Z"\n' +
        '                              fill="white"/>\n' +
        '                        <path d="M15 18C15 17.1716 15.6716 16.5 16.5 16.5C17.3284 16.5 18 17.1716 18 18C18 18.8284 17.3284 19.5 16.5 19.5C15.6716 19.5 15 18.8284 15 18Z"\n' +
        '                              fill="white"/>\n' +
        '                    </svg>',
      classes: ['navbar__adaptive'],
    }).render(),
  ],
  logo: 'https://hmeats-spaces.fra1.cdn.digitaloceanspaces.com/logo1.svg',
}

export const hamburger = (args) => Hamburger(args);

hamburger.args = {/* args */}
