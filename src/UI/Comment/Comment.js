import random1 from "../../assets/img/random1.jpg";

import s from './Comment.module.css'
import {Reply} from "../Reply/Reply";

export const Comment = props => {
    const {
        content
    } = props

    const {
        replies
    } = content

    console.log(content)

    return (
        <div className={s.comment}>
            <div className={s.commentImg}>
                <img src={random1} alt=""/>
            </div>
            <div className={s.commentBody}>
                <div className={s.commentHeader}>
                    <div className={s.commentUserInfo}>
                        <h1>{content.username}</h1>
                        <p>{content.userEmail}</p>
                    </div>
                    <div className={s.commentReplyBtn}>
                        <button>Reply</button>
                    </div>
                </div>
                <div className={s.commentContent}>
                    <p>{content.comment}</p>
                </div>
            </div>
            <div className={s.replies}>
                {
                    replies?.length !== 0 && replies?.map(el => (
                        <div className={s.reply}>
                            <Reply
                                content={el}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}