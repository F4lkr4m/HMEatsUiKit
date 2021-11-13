import styles from './profileButtonsNav.scss'
import profileButtonsNav from './profileButtonsNav.hbs'

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

export const ProfileButtonsNav = (props) => {
    return profileButtonsNav(props);
}