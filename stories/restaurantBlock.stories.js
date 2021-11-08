import {RestaurantBlock} from "../src/components/restaurantBlock/restaurantBlock";

export default {
  title: "Components/RestaurantBlock",
  component: RestaurantBlock,
}

export const Default = (args) => {
  const block = new RestaurantBlock(args);
  return block.render();
}


Default.args = {
  id: '1',
  img: 'https://pokatim.ru/uploads/posts/2020-08/1598606636_rpwswmq3ullhobrcmp5evrhuifhl6x5k0nnt8dda.jpeg',
  name: 'KFC',
  costFFD: '123',
  minDTime: '20',
  maxDTime: '30',
  rate: 4.5,
}