import {List} from "../src/components/list/list";
import {RestaurantBlock} from "../src/components/restaurantBlock/restaurantBlock";
import {DishBlock} from "../src/components/dishBlock/dishBlock";

export default {
  title: "Components/List",
  component: List,
}

export const RestaurantList = (args) => {
  const block = new RestaurantBlock({
    id: '1',
    img: 'https://pokatim.ru/uploads/posts/2020-08/1598606636_rpwswmq3ullhobrcmp5evrhuifhl6x5k0nnt8dda.jpeg',
    name: 'KFC',
    costFFD: '123',
    minDTime: '20',
    maxDTime: '30',
    rate: 4.5,
  });
  const objList = [];
  for(let i = 0; i < args.number; i++) {
    objList.push(block.render());
  }
  args.objList = objList;
  const list = new List(args);
  return list.render();
}


RestaurantList.args = {
  listTitle: 'Рестораны',
  number: 7,
}

export const DishesList = (args) => {
  const block = new DishBlock({
    id: '1',
    img: 'https://pokatim.ru/uploads/posts/2020-08/1598606636_rpwswmq3ullhobrcmp5evrhuifhl6x5k0nnt8dda.jpeg',
    name: 'KFC',
    cost: '123',
    ccal: '320',
  });
  const objList = [];
  for(let i = 0; i < args.number; i++) {
    objList.push(block.render());
  }
  args.objList = objList;
  const list = new List(args);
  return list.render();
}

DishesList.args = {
  listTitle: 'Популярное',
  number: 7,
}
