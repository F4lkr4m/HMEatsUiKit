import {SortBox} from "../src/components/sortBox/sortBox";

export default {
  title: "Components/SortBox",
  component: SortBox,
}

export const sortBox = (args) => new SortBox(args).render();

sortBox.args = {}
