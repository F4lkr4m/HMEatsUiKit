import styles from './textArea.scss'
import textAreaTemplate from './textArea.hbs'

export const TextArea = ({
  rows = 5,
  maxlength = 200,
  placeholder = '',
                         }) => {
  return textAreaTemplate({
    rows: rows,
    maxlength: maxlength,
    placeholder: placeholder,
  });
}