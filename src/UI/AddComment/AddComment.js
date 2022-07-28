import s from './AddComment.module.css'

import {Button} from "../Button/Button";
import {useState} from "react";

export const AddComment = props => {
    const [comment, setComment] = useState('')

    return(
        <section className={s.articlePage__addComment}>
            <form>
                <h1>Add Comment</h1>
                <textarea
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    cols="30"
                    rows="10"
                    maxLength={250}
                    placeholder={'Type your comment here'}
                />
                <div className={s.articlePage__addCommentBottom}>
                    <p><span>{250 - comment.length}</span> Characters left</p>
                    <Button type={'submit'}>Post Comment</Button>
                </div>
            </form>
        </section>
    )
}