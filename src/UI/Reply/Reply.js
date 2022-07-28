import random1 from "../../assets/img/random1.jpg";

import s from './Reply.module.css'

export const Reply = props => {
    const {
        content
    } = props

    return(
        <div className={s.reply}>
            <div className={s.replyImg}>
                <img src={random1} alt=""/>
            </div>
            <div className={s.replyBody}>
                <div className={s.replyHeader}>
                    <div className={s.replyUserInfo}>
                        <h1>{content.username}</h1>
                        <p>{content.userEmail}</p>
                    </div>
                    <div className={s.commentReplyBtn}>
                        <button>Reply</button>
                    </div>
                </div>
                <div className={s.replyContent}>
                    <p><a href="">{content.replyTo}</a> {content.comment}</p>
                </div>
            </div>
        </div>
    )
}