import {DishBlock} from "../src/components/dishBlock/dishBlock";

export default {
  title: "Components/DishBlock",
  component: DishBlock,
}

export const Default = (args) => DishBlock(args);

Default.args = {
  id: '1',
  img: 'https://pokatim.ru/uploads/posts/2020-08/1598606636_rpwswmq3ullhobrcmp5evrhuifhl6x5k0nnt8dda.jpeg',
  name: 'KFC',
  cost: '123',
  ccal: '320',
}

export const AddInRestaurant = (args) => DishBlock(args);

AddInRestaurant.args = {
  addDishProfile: true,
  id: '1',
  img: 'https://pokatim.ru/uploads/posts/2020-08/1598606636_rpwswmq3ullhobrcmp5evrhuifhl6x5k0nnt8dda.jpeg',
  name: 'KFC',
  cost: '123',
  ccal: '320',
}