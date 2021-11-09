import {Input} from "../src/forms/input/input";
import {ContentBlock} from "../src/components/contentBlock/contentBlock";
import {Button} from "../src/components/button/button";

export default {
  title: "Components/ContentBlock",
  component: ContentBlock,
}

export const contentBlock = (args) => {
  const block = new ContentBlock(args);
  return block.render();
};

contentBlock.args = {
  content: [
    '<div class="font_h2">Пример контентного блока</div>',
    new Input({
      label: 'Имя',
      placeholder: 'Имя',
      border: false,
      borderRadius: 'high',
      type: 'text'
    }).render(),
    new Input({
      label: 'Электронная почта',
      placeholder: 'Электронная почта',
      border: false,
      borderRadius: 'high',
      type: 'email'
    }).render(),
    new Input({
      label: 'Номер телефона',
      placeholder: 'Номер телефона',
      border: false,
      borderRadius: 'high',
      type: 'text'
    }).render(),
    new Button({
      label: 'Зарегистрироваться',
      color: 'green',
      size: 'md',
      classes: ['button_wide'],
    }).render(),
  ]
};