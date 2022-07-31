import idea from "../../assets/img/idea.png"

import {useContext, useState} from "react"
import {Context} from "../../Context"

import s from './MainPage.module.css'
import {MainPageSidebar} from "../../components/MainPageSideBar/MainPageSidebar";
import {MainPageContent} from "../../components/MainPageContent/MainPageContent";

export const MainPage = props => {
    const {
        categories,
        selectedCategory,
        handleChangeCategory,
        articles,
        roadmaps,
        handleMenuClick,
        isMenuOpen,
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
                <MainPageSidebar
                    handleMenuClick={handleMenuClick}
                    isMenuOpen={isMenuOpen}
                    categories={categories}
                    roadmaps={roadmaps}
                    handleChangeCategory={handleChangeCategory}
                    selectedCategory={selectedCategory}
                />
                <MainPageContent
                    handleSortChange={handleSortChange}
                    articles={articles}
                    selectedCategory={selectedCategory}
                    selectedSort={selectedSort}
                />
            </div>
        </section>
    )
}