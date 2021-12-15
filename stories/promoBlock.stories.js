import {PromoBlock} from "../src/components/promoBlock/promoBlock";

export default {
  title: "Components/PromoBlock",
  component: PromoBlock,
}

export const promoBlock = (args) => new PromoBlock(args).render();

promoBlock.args = {
  name: 'Акция на наггетсы',
  desc: '30 по цене 20',
  restId: 1,
  img: 'https://calorizator.ru/sites/default/files/imagecache/product_512/product/chicken-mcnuggets.jpg',
}
