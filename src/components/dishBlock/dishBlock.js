import styles from './dishBlock.scss'
import dishBlockTemplate from './dishBlock.hbs'

export function DishBlock({
                            addDishProfile = false,
                            id = "",
                            img = "",
                            name = "",
                            cost = "",
                            ccal = "",
                          }) {
  return dishBlockTemplate({
    addDishProfile: addDishProfile,
    id: id,
    img: img,
    name: name,
    cost: cost,
    ccal: ccal,
  });
}