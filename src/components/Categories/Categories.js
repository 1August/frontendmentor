import s from './Categories.module.css'
import {CategoryItem} from "./CategoryItem/CategoryItem"

export const Categories = props => {
    const {
        categories,
        selectedCategory,
        handleChangeCategory
    } = props

    return(
        <div className={s.categories}>
            {
                categories.length !== 0 && categories?.map((el, i) => (
                    <CategoryItem
                        key={`${el.id}-${i}`}
                        selectedCategory={selectedCategory}
                        handleChangeCategory={handleChangeCategory}
                        el={el}
                    />
                ))
            }
        </div>
    )
}