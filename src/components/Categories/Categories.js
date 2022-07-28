import s from './Categories.module.css'
import {CategoryItem} from "./CategoryItem/CategoryItem";

export const Categories = props => {
    const {
        categories,
        selectedCategory,
        handleChangeCategory
    } = props

    return(
        <div className={s.categories}>
            {
                categories.length !== 0 && categories?.map(el => (
                    <CategoryItem
                        selectedCategory={selectedCategory}
                        handleChangeCategory={handleChangeCategory}
                        el={el}
                    />
                ))
            }
        </div>
    )
}