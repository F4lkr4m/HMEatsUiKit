import styles from './buttonGroup.scss'
import buttonGroupTemplate from './buttonGroup.hbs'

export const ButtonGroup = ({
  row = true,
  buttons = [],
}) => {
  return buttonGroupTemplate({row: row, buttons: buttons});
}
