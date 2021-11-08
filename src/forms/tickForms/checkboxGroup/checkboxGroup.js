import styles from '../tickFormGroup.scss'
import checkboxGroupTemplate from './checkboxGroup.hbs'

export class CheckboxGroup {
  constructor(args) {
    this.checkboxes = args.checkboxes;
    this.groupTitle = args.groupTitle;
  }

  render() {
    return checkboxGroupTemplate({
      groupTitle: this.groupTitle,
      checkboxes: this.checkboxes,
    });
  }
}
