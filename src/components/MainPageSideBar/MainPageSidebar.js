import s from "./MainPageSidebar.module.css";
import {Menu} from "../../UI/Menu/Menu";
import {Categories} from "../Categories/Categories";
import {Roadmap} from "../Roadmap/Roadmap";

export const MainPageSidebar = props => {
    const {
        handleMenuClick,
        isMenuOpen,
        categories,
        roadmaps,
        handleChangeCategory,
        selectedCategory
    } = props

    return(
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
    )
}