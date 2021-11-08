import {Modal} from "../src/components/modal/modal";
import {DishModal} from "../src/components/modal/dishModal/dishModal";
import {ContinueModal} from "../src/components/modal/continueModal/continueModal";

export default {
  title: "Components/Modal",
  component: Modal,
}

export const Default = (args) => {
  const block = new Modal(args);
  return block.render();
}


Default.args = {
}

export const dishModal = (args) => {
  const block = new DishModal(args);
  return block.render();
}

dishModal.args = {
  img: 'https://avatars.mds.yandex.net/i?id=8190d1c6f0a87d9dcc258676e69b5018-2431862-images-thumbs&n=13',
  name: 'Чизбургер',
  desc: 'Большое комбо. При изменении комплектации цена комбо может измениться.',
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

export const continueModal = (args) => {
  const block = new ContinueModal(args);
  return block.render();
}

continueModal.args = {}