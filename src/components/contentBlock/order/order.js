import styles from './order.scss'
import orderTemplate from './order.hbs'

export const Order = (order) => {
  return orderTemplate(order);
}