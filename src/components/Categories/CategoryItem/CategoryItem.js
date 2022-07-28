import s from './CategoryItem.module.css'

export const CategoryItem = props => {
    const {
        el,
        handleChangeCategory,
        selectedCategory
    } = props

    return(
        <span
            key={el.idName + Math.random()}
            htmlFor={el.idName}
            onClick={() => handleChangeCategory(el.idName)}
            data-checked={el.idName === selectedCategory}
        >
            {el.label}
        </span>
    )
}