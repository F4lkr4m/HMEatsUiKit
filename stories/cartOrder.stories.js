import {Order} from '../src/components/contentBlock/order/order';

export default {
  title: "Components/Order",
  component: Order,
}

export const cartOrder = (args) => Order(args);

cartOrder.args = {
  historyOrder: false,
  id: 100,
  name: 'Mac',
  img: 'http://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/96672465571661.5afc10a864fc2.jpg',
  date: '11.11.2021, 17:00',
  addrs: 'Москва, Улица Пушкина, дом Колотушкина',
  status: true,
  items: [
    {
      name: 'Наггетсы',
      count: 13,
      cost: 100
    }
  ],
  dCost: 200,
  sumCost: 300,
}

export const historyOrder = (args) => Order(args);

historyOrder.args = {
  historyOrder: true,
  id: 100,
  name: 'Mac',
  img: 'http://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/96672465571661.5afc10a864fc2.jpg',
  date: '11.11.2021, 17:00',
  addrs: 'Москва, Улица Пушкина, дом Колотушкина',
  inProgress: false,
  cancel: true,
  done: false,
  items: [
    {
      name: 'Наггетсы',
      count: 13,
      cost: 100,
      radios: [
        {
          name: 'Соус сырный',
        },
        {
          name: 'Соус чесночный',
        },
      ],
      ingredients: [
        {
          name: 'Креветка'
        },
        {
          name: 'Котлетка'
        }
      ]
    }
  ],
  dCost: 200,
  sumCost: 300,
}

export const noItemsOrder = (args) => Order(args);

noItemsOrder.args = {}
