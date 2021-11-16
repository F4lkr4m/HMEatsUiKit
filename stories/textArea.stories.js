import {TextArea} from "../src/forms/textArea/textArea";

export default {
  title: "Forms/TextArea",
  component: TextArea,
}

export const textArea = (args) =>  TextArea(args);

textArea.args = {
  placeholder: 'Введи что-нибудь :3'
}
