import s from './ArticlePageArticles.module.css'

import {Article} from "../../UI/Article/Article"
import {Context} from "../../Context"
import {useContext} from "react"

export const ArticlePageArticles = props => {
    const {
        thisArticle
    } = props

    return(
        <section className="articlePage__body">
            <Article
                el={thisArticle}
            />
        </section>
    )
}