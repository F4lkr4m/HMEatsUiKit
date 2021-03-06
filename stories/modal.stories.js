import {Modal} from "../src/components/modal/modal";
import {DishModal} from "../src/components/modal/dishModal/dishModal";
import {ContinueModal} from "../src/components/modal/continueModal/continueModal";
import {Input} from "../src/forms/input/input";
import {Button} from "../src/components/button/button";
import {Card} from "../src/components/card/card";
import {ButtonGroup} from "../src/components/buttonGroup/buttonGroup";

export default {
  title: "Components/Modal",
  component: Modal,
}

export const Default = (args) => {
  const block = new Modal(args);
  return block.render();
}


Default.args = {
  title: 'Заголовок',
  topContent: ['<div class="font_h2">Какой то контент</div>'],
  centerContent: [new Input({
    label: 'Поле ввода',
    placeholder: 'Поле ввода',
    border: false,
    type: 'text',
  }).render()],
  bottomContent: [new Button({
    label: 'Кнопочка',
    color: 'green',
    size: 'md',
    icon: '',
    classes: ['button_wide']
  }).render()]
}

export const dishModal = (args) => {
  const block = new DishModal(args);
  return block.render();
}

dishModal.args = {
  img: 'https://avatars.mds.yandex.net/i?id=8190d1c6f0a87d9dcc258676e69b5018-2431862-images-thumbs&n=13',
  name: 'Чизбургер',
  desc: 'Большое комбо. При изменении комплектации цена комбо может измениться.',
  cost: 100,
  ingredients: [
    {
      id: 276,
      name: "Морковь",
      cost: 4,
    },
    {
      id: 379,
      name: "Огурец",
      cost: 17,
    },
    {
      id: 1957,
      name: "Соль",
      cost: 4,
    }
  ],
  radios: [
    {
      name: "Напиток",
      id: 88,
      opt: [
        {
          id: 731,
          name: "Картофель фри",
        }
      ]
    },
    {
      name: "Бургер",
      id: 805,
      opt: [
        {
          id: 187,
          name: "Яблоки",
        },
        {
          id: 188,
          name: "Апельсины",
        },
        {
          id: 189,
          name: "Мандарины",
        }
      ]
    }
  ],
}

export const dishModal2 = (args) => {
  const block = new DishModal(args);
  return block.render();
}

dishModal2.args = {
  img: 'https://avatars.mds.yandex.net/i?id=8190d1c6f0a87d9dcc258676e69b5018-2431862-images-thumbs&n=13',
  name: 'Чизбургер',
  cost: 100,
}

export const continueModal = (args) => {
  const block = new ContinueModal(args);
  return block.render();
}

continueModal.args = {
  oldRestaurantName: 'KFC',
  newRestaurantName: 'Mac',
}

export const cardModal = (args) => {
  const block = new Modal(args);
  return block.render();
}

cardModal.args = {
  title: 'Онлайн оплата',
  centerContent: [new Card({sumCost: 100}).render()],
}

export const changeModal = (args) => {
  const block = new Modal(args);
  return block.render();
}

changeModal.args = {
  title: 'Поменять название раздела?',
  centerContent: [new Input({
    label: '',
    placeholder: 'Новое название раздела',
    border: true,
    borderRadius: 'high'
  }).render()],
  bottomContent: [
    ButtonGroup({
      row: true,
      buttons: [new Button({
        label: 'Отмена',
        color: 'green',
      }).render(),
        new Button({
          label: 'Принять'
        }).render(),]
    })
  ]
}

