import s from './Button.module.css'

export const Button = props => {
    const {
        children,
        color = '',
        ...etc
    } = props
    return(
        <div className={color ? `${s.button} ${s.blueBg}` : s.button} id="button" {...etc}>
            {children}
        </div>
    )
}