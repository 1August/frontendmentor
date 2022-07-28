import s from './Button.module.css'

export const Button = props => {
    const {
        children,
        ...etc
    } = props
    return(
        <div className={s.button} id="button" {...etc}>
            {children}
        </div>
    )
}