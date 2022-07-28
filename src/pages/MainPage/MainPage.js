import idea from "../../assets/img/idea.png"

import {useContext, useState} from "react";
import {Context} from "../../Context";

import s from './MainPage.module.css'
import {Link} from "react-router-dom";
import {Button} from "../../UI/Button/Button";
import {Article} from "../../UI/Article/Article";
import {Roadmap} from "../../components/Roadmap/Roadmap";
import {Menu} from "../../UI/Menu/Menu";
import {Categories} from "../../components/Categories/Categories";

export const MainPage = props => {
    const {
        categories,
        selectedCategory,
        handleChangeCategory,
        articles,
        roadmaps,
        handleMenuClick,
        isMenuOpen,
        setIsMenuOpen,
    } = useContext(Context)

    const mostUpvotesSort = (a, b) => a.rating <= b.rating ? 1: -1
    const titleAscSort = (a, b) => a.title.localeCompare(b.title)
    const titleDescSort = (a, b) => b.title.localeCompare(a.title)

    const [selectedSort, setSelectedSort] = useState(() => mostUpvotesSort)

    const handleSortChange = e => {
        if (e.target.value === 'mostUpvotesSort') setSelectedSort(() => mostUpvotesSort)
        else if (e.target.value === 'titleAscSort') setSelectedSort(() => titleAscSort)
        else if (e.target.value === 'titleDescSort') setSelectedSort(() => titleDescSort)
    }

    return (
        <section className={'mainPage'} id={s.mainPage}>
            <div className='container'>
                <aside className={s.mainPage__sidebar}>
                    <header className={s.header} id="header">
                        <div className={s.header__card}>
                            <div className={s.header__cardBg}>
                                <div>
                                    <h1>Frontend Mentor</h1>
                                    <p>Feedback Board</p>
                                </div>
                                <Menu
                                    handleMenuClick={handleMenuClick}
                                />
                            </div>
                        </div>
                    </header>
                    {
                        isMenuOpen && <>
                            <Categories
                                categories={categories}
                                selectedCategory={selectedCategory}
                                handleChangeCategory={handleChangeCategory}
                            />
                            <Roadmap roadmaps={roadmaps}/>
                        </>
                    }
                </aside>
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
            </div>
        </section>
    )
}