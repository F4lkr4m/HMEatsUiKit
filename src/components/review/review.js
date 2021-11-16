import styles from './review.scss'
import reviewTemplate from './review.hbs'

export const Review = ({
                         name = '',
                         text = '',
  rate = '',
  date = '',
                       }) => {
  return reviewTemplate({
    name: name,
    text: text,
    rate: rate,
    date: date,
  });
}