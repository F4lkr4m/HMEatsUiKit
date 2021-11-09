import {Footer} from "../src/components/footer/footer";

export default {
  title: "Components/Footer",
  component: Footer,
}

export const footer = (args) => {
  const block = new Footer(args);
  return block.render();
}

footer.args = {
  nav: [
    {
      title: 'HMEats для ресторанов',
      href: '',
    },
    {
      title: 'HMEats для курьеров',
      href: '',
    },
    {
      title: 'Помощь',
      href: '',
    },
    {
      title: 'Контакты',
      href: '',
    },
  ]
}