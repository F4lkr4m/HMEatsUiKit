import styles from '../tickFormGroup.scss'
import radioGroupTemplate from './radioGroup.hbs'

export class RadioGroup {
  constructor(args) {
    this.radios = args.radios;
    this.radioName = args.radioName;
    this.groupTitle = args.groupTitle;
  }

  render() {
    return radioGroupTemplate({
      radioName: this.radioName,
      radios: this.radios,
      groupTitle: this.groupTitle,
    });
  }
}
