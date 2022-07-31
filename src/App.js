import './assets/css/variables.css'
import './App.css'
import {useEffect, useMemo, useState} from "react"

import {MainPage} from "./pages/MainPage/MainPage"
import {Routes, Route} from 'react-router-dom'

import {Context} from "./Context"
import {ArticlePage} from "./pages/ArticlePage/ArticlePage"

const App = () => {
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [categories, setCategories] = useState([
        {
            idName: 'All',
            label: 'All'
        },
        {
            idName: 'UI',
            label: 'UI'
        },
        {
            idName: 'UX',
            label: 'UX'
        },
        {
            idName: 'Enhancement',
            label: 'Enhancement'
        },
        {
            idName: 'Bug',
            label: 'Bug'
        },
        {
            idName: 'Feature',
            label: 'Feature'
        }
    ])
    const [articles, setArticles] = useState([
        {
            id: 1,
            title: 'Lorem ipsum dolor1.',
            label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur dolores eius et illum nihil odio voluptatem. Aliquam aut commodi dolores et eveniet illum laborum minus obcaecati, recusandae rerum vero?',
            rating: 215,
            comments: [
                {
                    id: 300,
                    username: 'Qwerty',
                    userEmail: 'qwerty@mail.com',
                    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ducimus, eaque error et, expedita in incidunt magni obcaecati perferendis placeat quo sequi tempora temporibus ut, vero voluptate voluptates? Dignissimos dolores facilis ipsam minus modi nostrum, ut! Consequuntur cumque cupiditate debitis facilis itaque, minima odit repudiandae! A ab aliquid amet consectetur deserunt dignissimos doloremque earum eum exercitationem expedita, fugiat ipsam laudantium libero maxime minus, molestiae mollitia neque non perferendis quae quisquam reiciendis repellendus reprehenderit sed soluta suscipit temporibus? A cupiditate doloribus nihil quaerat quos repellendus sequi ut veniam? Ab consequuntur, fugiat nisi possimus quos repudiandae rerum sunt tenetur ullam velit. Blanditiis?',
                    replies: [
                        {
                            id: 500,
                            username: 'Anne',
                            userEmail: 'anne@mail.com',
                            replyTo: 'qwerty@mail.com',
                            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ducimus, eaque error et, expedita in incidunt magni obcaecati perferendis placeat quo sequi tempora temporibus ut, vero voluptate voluptates? Dignissimos dolores facilis ipsam minus modi nostrum, ut! Consequuntur cumque cupiditate debitis facilis itaque, minima odit repudiandae! A ab aliquid amet consectetur deserunt dignissimos doloremque earum eum exercitationem expedita, fugiat ipsam laudantium libero maxime minus, molestiae mollitia neque non perferendis quae quisquam reiciendis repellendus reprehenderit sed soluta suscipit temporibus? A cupiditate doloribus nihil quaerat quos repellendus sequi ut veniam? Ab consequuntur, fugiat nisi possimus quos repudiandae rerum sunt tenetur ullam velit. Blanditiis?'
                        }
                    ]
                },
                {
                    id: 300,
                    username: 'Qwerty',
                    userEmail: 'qwerty@mail.com',
                    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ducimus, eaque error et, expedita in incidunt magni obcaecati perferendis placeat quo sequi tempora temporibus ut, vero voluptate voluptates? Dignissimos dolores facilis ipsam minus modi nostrum, ut! Consequuntur cumque cupiditate debitis facilis itaque, minima odit repudiandae! A ab aliquid amet consectetur deserunt dignissimos doloremque earum eum exercitationem expedita, fugiat ipsam laudantium libero maxime minus, molestiae mollitia neque non perferendis quae quisquam reiciendis repellendus reprehenderit sed soluta suscipit temporibus? A cupiditate doloribus nihil quaerat quos repellendus sequi ut veniam? Ab consequuntur, fugiat nisi possimus quos repudiandae rerum sunt tenetur ullam velit. Blanditiis?',
                    replies: [
                        {
                            id: 500,
                            username: 'Anne',
                            userEmail: 'anne@mail.com',
                            replyTo: 'qwerty@mail.com',
                            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ducimus, eaque error et, expedita in incidunt magni obcaecati perferendis placeat quo sequi tempora temporibus ut, vero voluptate voluptates? Dignissimos dolores facilis ipsam minus modi nostrum, ut! Consequuntur cumque cupiditate debitis facilis itaque, minima odit repudiandae! A ab aliquid amet consectetur deserunt dignissimos doloremque earum eum exercitationem expedita, fugiat ipsam laudantium libero maxime minus, molestiae mollitia neque non perferendis quae quisquam reiciendis repellendus reprehenderit sed soluta suscipit temporibus? A cupiditate doloribus nihil quaerat quos repellendus sequi ut veniam? Ab consequuntur, fugiat nisi possimus quos repudiandae rerum sunt tenetur ullam velit. Blanditiis?'
                        }
                    ]
                }
            ],
            category: 'UX'
        },
        {
            id: 2,
            title: 'Lorem ipsum dolor2.',
            label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur dolores eius et illum nihil odio voluptatem. Aliquam aut commodi dolores et eveniet illum laborum minus obcaecati, recusandae rerum vero?',
            rating: 954,
            comments: [
                {
                    id: 300,
                    username: 'Qwerty',
                    userEmail: 'qwerty@mail.com',
                    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ducimus, eaque error et, expedita in incidunt magni obcaecati perferendis placeat quo sequi tempora temporibus ut, vero voluptate voluptates? Dignissimos dolores facilis ipsam minus modi nostrum, ut! Consequuntur cumque cupiditate debitis facilis itaque, minima odit repudiandae! A ab aliquid amet consectetur deserunt dignissimos doloremque earum eum exercitationem expedita, fugiat ipsam laudantium libero maxime minus, molestiae mollitia neque non perferendis quae quisquam reiciendis repellendus reprehenderit sed soluta suscipit temporibus? A cupiditate doloribus nihil quaerat quos repellendus sequi ut veniam? Ab consequuntur, fugiat nisi possimus quos repudiandae rerum sunt tenetur ullam velit. Blanditiis?',
                    replies: [
                        {
                            id: 500,
                            username: 'Anne',
                            userEmail: 'anne@mail.com',
                            replyTo: 'qwerty@mail.com',
                            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ducimus, eaque error et, expedita in incidunt magni obcaecati perferendis placeat quo sequi tempora temporibus ut, vero voluptate voluptates? Dignissimos dolores facilis ipsam minus modi nostrum, ut! Consequuntur cumque cupiditate debitis facilis itaque, minima odit repudiandae! A ab aliquid amet consectetur deserunt dignissimos doloremque earum eum exercitationem expedita, fugiat ipsam laudantium libero maxime minus, molestiae mollitia neque non perferendis quae quisquam reiciendis repellendus reprehenderit sed soluta suscipit temporibus? A cupiditate doloribus nihil quaerat quos repellendus sequi ut veniam? Ab consequuntur, fugiat nisi possimus quos repudiandae rerum sunt tenetur ullam velit. Blanditiis?'
                        }
                    ]
                },

            ],
            category: 'Bug'
        },
        {
            id: 3,
            title: 'Lorem ipsum dolor3.',
            label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur dolores eius et illum nihil odio voluptatem. Aliquam aut commodi dolores et eveniet illum laborum minus obcaecati, recusandae rerum vero?',
            rating: 112,
            comments: [
                {
                    id: 300,
                    username: 'Qwerty',
                    userEmail: 'qwerty@mail.com',
                    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ducimus, eaque error et, expedita in incidunt magni obcaecati perferendis placeat quo sequi tempora temporibus ut, vero voluptate voluptates? Dignissimos dolores facilis ipsam minus modi nostrum, ut! Consequuntur cumque cupiditate debitis facilis itaque, minima odit repudiandae! A ab aliquid amet consectetur deserunt dignissimos doloremque earum eum exercitationem expedita, fugiat ipsam laudantium libero maxime minus, molestiae mollitia neque non perferendis quae quisquam reiciendis repellendus reprehenderit sed soluta suscipit temporibus? A cupiditate doloribus nihil quaerat quos repellendus sequi ut veniam? Ab consequuntur, fugiat nisi possimus quos repudiandae rerum sunt tenetur ullam velit. Blanditiis?',
                    replies: [
                        {
                            id: 500,
                            username: 'Anne',
                            userEmail: 'anne@mail.com',
                            replyTo: 'qwerty@mail.com',
                            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ducimus, eaque error et, expedita in incidunt magni obcaecati perferendis placeat quo sequi tempora temporibus ut, vero voluptate voluptates? Dignissimos dolores facilis ipsam minus modi nostrum, ut! Consequuntur cumque cupiditate debitis facilis itaque, minima odit repudiandae! A ab aliquid amet consectetur deserunt dignissimos doloremque earum eum exercitationem expedita, fugiat ipsam laudantium libero maxime minus, molestiae mollitia neque non perferendis quae quisquam reiciendis repellendus reprehenderit sed soluta suscipit temporibus? A cupiditate doloribus nihil quaerat quos repellendus sequi ut veniam? Ab consequuntur, fugiat nisi possimus quos repudiandae rerum sunt tenetur ullam velit. Blanditiis?'
                        }
                    ]
                },

            ],
            category: 'UI'
        }
    ])
    const [roadmaps, setRoadmaps] = useState([
        {
            id: 200,
            title: 'List 1',
            number: 5
        },
        {
            id: 201,
            title: 'List 2',
            number: 2
        },
        {
            id: 202,
            title: 'List 3',
            number: 3
        }
    ])

    const handleChangeCategory = idName => setSelectedCategory(idName)

    const [isMenuOpen, setIsMenuOpen] = useState(() => window.innerWidth > '768')

    useEffect(() => {
        window.addEventListener('resize', e => {
            if (e.target.innerWidth > 768) setIsMenuOpen(true)
        })
    }, [])

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <Context.Provider value={{
            handleChangeCategory,
            selectedCategory,
            setSelectedCategory,
            categories,
            setCategories,
            articles,
            setArticles,
            roadmaps,
            setRoadmaps,
            isMenuOpen,
            setIsMenuOpen,
            handleMenuClick
        }}>
            <div className="App">
                <main>
                    <Routes>
                        <Route path={'/'} element={<MainPage/>}/>
                        <Route path={'/article/:articleId'} element={<ArticlePage/>}/>
                    </Routes>
                </main>
            </div>
        </Context.Provider>
    )
}

export default App