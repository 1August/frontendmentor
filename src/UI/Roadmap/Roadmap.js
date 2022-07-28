import s from "./Roadmap.module.css"
import {RoadmapItem} from "./RoadmapItem/RoadmapItem";

export const Roadmap = props => {
    const {
        roadmaps
    } = props

    return (
        <div className={s.roadmap} id="roadmap">
            <div className={s.roadmap__header}>
                <h1>Roadmap</h1>
                <a href="#">View</a>
            </div>
            <div className={s.roadmap__planned}>
                {
                    roadmaps?.length !== 0 && roadmaps?.map(el => (
                        <RoadmapItem
                            key={el.id}
                            content={el}
                        />
                    ))
                }

                {/*<div className={s.roadmap__plannedItem}>*/}
                {/*    <p>List 1</p>*/}
                {/*    <span className={s.roadmap__number}>5</span></div>*/}
                {/*<div className={s.roadmap__plannedItem}>*/}
                {/*    <p>List 2</p>*/}
                {/*    <span className={s.roadmap__number}>5</span></div>*/}
                {/*<div className={s.roadmap__plannedItem}>*/}
                {/*    <p>List 3</p>*/}
                {/*    <span className={s.roadmap__number}>5</span></div>*/}
            </div>
        </div>

    )
}