import styles from '../tickFormGroup.scss'
import radioGroupTemplate from './radioGroup.hbs'

export class RadioGroup {
  constructor({
                radios = [],
                radioName = '',
                groupTitle = '',
                id = 1,
              }) {
    this.radios = radios;
    if (this.radios.length > 0) {
      this.radios[0].checked = true;
    }
    this.radioName = radioName;
    this.groupTitle = groupTitle;
    this.id = id;
  }

  render() {
    return radioGroupTemplate({
      id: this.id,
      radioName: this.radioName,
      radios: this.radios,
      groupTitle: this.groupTitle,
    });
  }
}
