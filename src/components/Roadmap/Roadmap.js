import s from "./Roadmap.module.css"
import {RoadmapItem} from "./RoadmapItem/RoadmapItem"

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
            </div>
        </div>

    )
}