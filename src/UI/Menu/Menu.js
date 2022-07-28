import s from './Menu.module.css'

export const Menu = props => {
    const {
        handleMenuClick
    } = props

    return(
        <div
            className={s.menu}
            id="menu"
            onClick={handleMenuClick}
        >
            <span className={s.menuItem}/>
            <span className={s.menuItem}/>
            <span className={s.menuItem}/>
        </div>
    )
}