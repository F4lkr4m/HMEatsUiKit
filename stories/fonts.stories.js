import Fonts from '../src/components/fonts/fonts';

export default {
  title: "Components/Fonts",
  component: Fonts,
}

const FontsH1 = (args) => Fonts(args);
const FontsH2 = (args) => Fonts(args);
const FontsH3 = (args) => Fonts(args);
const FontsParagraph = (args) => Fonts(args);
const RedLineFont = (args) => Fonts(args);
const BadgeFont = (args) => Fonts(args);

export const AllFonts = () => {
  return FontsH1({
    text: 'Текст первого уровня',
    size: "font_h1",
  }) + FontsH2({
    text: 'Текст второго уровня',
    size: "font_h2",
  }) + FontsH3({
    text: 'Текст третьего уровня',
    size: "font_h3",
  }) + FontsParagraph({
    text: 'Текст третьего уровня',
    size: "font-paragraph",
  }) + RedLineFont({
    text: 'Текст абзаца',
    size: "font-body",
  }) + BadgeFont({
    text: 'Текст для бэйджей',
    size: "font-label",
  })
}
