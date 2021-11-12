import styles from './navbar.scss'
import navbarTemplate from './navbar.hbs'

/**
 * props = {
 *   buttons: [
 *     button html
 *   ]
 *   logo: url img
 * }
 * @param props
 * @return {*}
 * @constructor
 */

export const Navbar = (props) => {
  return navbarTemplate(props);
}