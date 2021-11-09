import {Card} from "../src/components/card/card";

export default {
  title: "Components/Card",
  component: Card,
}

export const card = (args) => new Card(args).render();

card.args = {sumCost: 100}