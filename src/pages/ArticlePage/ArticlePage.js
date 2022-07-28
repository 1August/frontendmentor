import s from './ArticlePage.module.css'
import {useContext, useEffect, useState} from "react";
import {Context} from "../../Context";
import {useNavigate, useParams} from "react-router-dom";

import left from '../../assets/img/left-arrow.png'
import {Button} from "../../UI/Button/Button";
import {Article} from "../../UI/Article/Article";

import random1 from '../../assets/img/random1.jpg'
import {Comment} from "../../UI/Comment/Comment";
import {AddComment} from "../../UI/AddComment/AddComment";

export const ArticlePage = props => {
    const navigation = useNavigate()

    const {
        articles
    } = useContext(Context)

    const [thisArticle, setThisArticle] = useState({})

    const {articleId} = useParams()

    useEffect(() => {
        setThisArticle(articles.find(el => +el.id === +articleId))

        console.log(articles.find(el => +el.id === +articleId))
    }, [])

    return(
        <div className={s.articlePage} id={s.articlePage}>
            <div className="container">
                <header className={s.articlePage__header}>
                    <p className={s.goBackLink} onClick={() => navigation(-1)}><img src={left} alt="go back"/>Go Back</p>
                    <Button>Edit Feedback</Button>
                </header>
                <section className="articlePage__body">
                    <Article
                        el={thisArticle}
                    />
                </section>
                <section className={s.articlePage__comments} id="articlePage__comments">
                    <h1>{thisArticle.commentsNumber} {thisArticle.commentsNumber === 1 ? 'Comment' : 'Comments'}</h1>
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
                <AddComment

                />
            </div>
        </div>
    )
}