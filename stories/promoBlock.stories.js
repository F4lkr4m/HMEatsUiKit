import {PromoBlock} from "../src/components/promoBlock/promoBlock";

export default {
  title: "Components/PromoBlock",
  component: PromoBlock,
}

export const promoBlock = (args) => new PromoBlock(args).render();

promoBlock.args = {}
