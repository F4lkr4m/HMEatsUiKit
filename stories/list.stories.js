import {List} from "../src/components/list/list";
import {RestaurantBlock} from "../src/components/restaurantBlock/restaurantBlock";
import {DishBlock} from "../src/components/dishBlock/dishBlock";
import {ButtonIcon} from "../src/components/button/button";

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
  const block = DishBlock({
    id: '1',
    img: 'https://pokatim.ru/uploads/posts/2020-08/1598606636_rpwswmq3ullhobrcmp5evrhuifhl6x5k0nnt8dda.jpeg',
    name: 'KFC',
    cost: '123',
    ccal: '320',
  });
  const objList = [];
  for(let i = 0; i < args.number; i++) {
    objList.push(block);
  }
  args.objList = objList;
  const list = new List(args);
  return list.render();
}

DishesList.args = {
  listTitle: 'Популярное',
  number: 7,
}

export const DishesListWithButtons = (args) => {
  const block = DishBlock({
    id: '1',
    img: 'https://pokatim.ru/uploads/posts/2020-08/1598606636_rpwswmq3ullhobrcmp5evrhuifhl6x5k0nnt8dda.jpeg',
    name: 'KFC',
    cost: '123',
    ccal: '320',
  });
  const objList = [];
  for(let i = 0; i < args.number; i++) {
    objList.push(block);
  }
  args.objList = objList;
  const list = new List(args);
  return list.render();
}

DishesListWithButtons.args = {
  listTitle: 'Популярное',
  buttons: [
    new ButtonIcon({
      iconButtonColor: 'gray',
      icon: '' +
        '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M15.1369 3.46967C14.9963 3.32902 14.8055 3.25 14.6066 3.25C14.4077 3.25 14.2169 3.32902 14.0763 3.46967L4.88388 12.6621C4.78965 12.7563 4.72223 12.8739 4.68856 13.0028L3.68856 16.8313C3.62127 17.0889 3.69561 17.3629 3.88388 17.5511C4.07215 17.7394 4.34614 17.8138 4.60375 17.7465L8.43218 16.7465C8.56111 16.7128 8.67874 16.6454 8.77297 16.5511L17.9654 7.35876C18.2582 7.06586 18.2582 6.59099 17.9654 6.2981L15.1369 3.46967ZM6.08843 13.5788L14.6066 5.06066L16.3744 6.82843L7.8562 15.3466L5.46344 15.9716L6.08843 13.5788Z" fill="black"/>\n' +
        '<path d="M4 19.25C3.58579 19.25 3.25 19.5858 3.25 20C3.25 20.4142 3.58579 20.75 4 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20C19.75 19.5858 19.4142 19.25 19 19.25H4Z" fill="black"/>\n' +
        '</svg>\n'
    }).render(),
    new ButtonIcon({
      iconButtonColor: 'gray',
      icon: '' +
        '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M8.46458 15.5354L15.5356 8.46436" stroke="black" stroke-width="1.5" stroke-linecap="round"/>\n' +
        '<path d="M8.46458 8.46458L15.5356 15.5356" stroke="black" stroke-width="1.5" stroke-linecap="round"/>\n' +
        '</svg>\n'
    }).render(),
  ],
  number: 7,
}