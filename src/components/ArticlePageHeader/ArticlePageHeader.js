import s from './ArticlePageHeader.module.css'

import {Button} from "../../UI/Button/Button"

import left from '../../assets/img/left-arrow.png'
import {useNavigate} from "react-router-dom"

export const ArticlePageHeader = props => {
    const navigation = useNavigate()

    return(
        <header className={s.articlePage__header}>
            <p
                className={s.goBackLink}
                onClick={() => navigation(-1)}
            >
                <img src={left} alt="go back"/>Go Back
            </p>
            <Button
                color={'blue'}
            >Edit Feedback</Button>
        </header>
    )
}