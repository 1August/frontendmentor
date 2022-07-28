import s from './ArticlePage.module.css'
import {useContext, useEffect, useState} from "react";
import {Context} from "../../Context";
import {useNavigate, useParams} from "react-router-dom";

import left from '../../assets/img/left-arrow.png'
import {Button} from "../../UI/Button/Button";
import {Article} from "../../UI/Article/Article";

import random1 from '../../assets/img/random1.jpg'
import {Comment} from "../../UI/Comment/Comment";
import {AddComment} from "../../components/AddComment/AddComment";
import {ArticlePageHeader} from "../../components/ArticlePageHeader/ArticlePageHeader";
import {ArticlePageArticles} from "../../components/ArticlePageArticles/ArticlePageArticles";
import {ArticlePageComments} from "../../components/ArticlePageComments/ArticlePageComments";

export const ArticlePage = props => {
    const navigation = useNavigate()

    const {
        articles
    } = useContext(Context)

    const [thisArticle, setThisArticle] = useState({})

    const {articleId} = useParams()

    useEffect(() => {
        setThisArticle(articles.find(el => +el.id === +articleId))
    }, [])

    if (Object.values(thisArticle).length !== 0){
        return (<div className={s.articlePage} id={s.articlePage}>
                <div className="container">
                    <ArticlePageHeader/>
                    <ArticlePageArticles
                        thisArticle={thisArticle}
                    />
                    <ArticlePageComments
                        thisArticle={thisArticle}
                    />
                    <AddComment/>
                </div>
            </div>
        )
    }
}