import s from './Categories.module.css'

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
                    <label
                        key={el.idName + Math.random()}
                        htmlFor={el.idName}
                        onClick={() => handleChangeCategory(el.idName)}
                        data-checked={el.idName === selectedCategory}
                    >
                        {el.label}
                    </label>
                ))
            }
        </div>
    )
}