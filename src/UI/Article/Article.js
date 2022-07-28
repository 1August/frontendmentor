import up from "../../assets/img/up-arrow.png";
import chat from "../../assets/img/chat-bubble.png";

import s from './Article.module.css'
import {useContext} from "react";
import {Context} from "../../Context";

export const Article = props => {
    const {
        children,
        el
    } = props

    const {

    } = useContext(Context)

    return(
        <article className={s.article__post}>
            <div className={s.article__left}>
                <div>
                    <img src={up} alt="Rating"/>
                    <span className="article__rating">{el.rating}</span>
                </div>
            </div>
            <div className={s.article__mid}>
                <h1>{el.title}</h1>
                <p>{el.label}</p>
                <span className={s.article__category}>{el.category}</span>
            </div>
            <div className={s.article__right}>
                <img src={chat} alt=""/>
                <span>{el?.comments?.length}</span>
            </div>
        </article>
    )
}