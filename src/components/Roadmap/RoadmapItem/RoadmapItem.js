import s from "./Roadmap.module.css";

export const RoadmapItem = props => {
    const {
        content
    } = props

    return(
        <div className={s.roadmap__plannedItem}>
            <p>{content.title}</p>
            <span className={s.roadmap__number}>{content.number}</span>
        </div>
    )
}