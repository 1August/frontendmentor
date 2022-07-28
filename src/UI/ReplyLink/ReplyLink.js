import s from './ReplyLink.module.css'

export const ReplyLink = props => {
    const {
        href,
        children
    } = props

    return(
        <a
            href={href}
            className={s.replyLink}
        >
            @{children.substring(0, children.indexOf('@'))}
        </a>
    )
}