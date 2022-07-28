import s from './ArticlePageComments.module.css'
import {Comment} from "../../UI/Comment/Comment";

export const ArticlePageComments = props => {
    const {
        thisArticle
    } = props

    return(
        <section className={s.articlePage__comments} id="articlePage__comments">
            <h1>{thisArticle.comments.length} {thisArticle.comments.length === 1 ? 'Comment' : 'Comments'}</h1>
            <div className="articlePage__commentsBody">
                {
                    thisArticle?.comments?.length !== 0 && thisArticle?.comments?.map(el => (
                        <Comment
                            key={el.id}
                            content={el}
                        />
                    ))
                }
            </div>
        </section>
    )
}