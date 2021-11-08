import {Input} from "../src/forms/input/input";
import {ContentBlock} from "../src/components/contentBlock/contentBlock";

export default {
  title: "Components/ContentBlock",
  component: ContentBlock,
}

export const contentBlock = (args) => {
  const block = new ContentBlock(args);
  return block.render();
};

contentBlock.args = {};