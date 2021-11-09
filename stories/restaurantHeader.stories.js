import {RestaurantHeader} from "../src/components/restaurantHeader/restaurantHeader";

export default {
  title: "Components/RestaurantHeader",
  component: RestaurantHeader,
}

export const restaurantHeader = (args) => {
  const block = new RestaurantHeader(args);
  return block.render();
}

restaurantHeader.args = {
  restaurant: {
    id: 41,
    img: "https://avatars.mds.yandex.net/get-zen_doc/51081/pub_5f96d7f1bc35081b5203ce74_5f96dd8924d0d15a6614547a/scale_1200",
    name: "Vero",
    costFFD: 0,
    minDTime: 15,
    maxDTime: 30,
    rating: 0.5,
  }
}