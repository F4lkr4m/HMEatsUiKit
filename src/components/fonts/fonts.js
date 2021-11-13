import style from './fonts.scss'
import fontsTemplate from './fonts.hbs'

function Fonts({
    text,
    size,
    classes
               }) {
  return fontsTemplate({
    text, size, classes,
  });
}

export default Fonts;