import s from './MainPageContent.module.css'
import idea from "../../assets/img/idea.png";
import {Button} from "../../UI/Button/Button";
import {Link} from "react-router-dom";
import {Article} from "../../UI/Article/Article";

export const MainPageContent = props => {
    const {
        handleSortChange,
        articles,
        selectedCategory,
        selectedSort
    } = props

    return(
        <div className={s.mainPage__content}>
            <div className={s.suggestion__header}>
                <div>
                    <img src={idea} alt="Idea"/>
                    <h4><span>6</span> Suggestions</h4>
                    <h6>Sort by:
                        <select onChange={handleSortChange}>
                            <option value={'mostUpvotesSort'}>Most Upvotes</option>
                            <option value={'titleAscSort'}>Title Ascending</option>
                            <option value={'titleDescSort'}>Title Descending</option>
                        </select>
                    </h6>
                </div>
                <div><Button>+ Add Feedback</Button></div>
            </div>
            <div className={s.articles} id="articles">
                {
                    articles.length !== 0 && articles
                        .filter(el => selectedCategory === 'All' ? true : el.category === selectedCategory)
                        .sort(selectedSort)
                        .map(el => (
                            <Link key={el.id} to={`/article/${el.id}`}>
                                <Article
                                    el={el}
                                />
                            </Link>
                        ))
                }
            </div>
        </div>
    )
}