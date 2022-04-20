import { EventData, EventListProps } from "../../data/types"
import EventItem from "./event-item"
import styles from './event-list.module.css'



const EventList = (props:EventListProps)=>{
    const {items }= props

    return (
        <ul className={styles.list}>
            {items.map((evt:EventData) => <EventItem
                key={evt.id}
                title={evt.title}
                image={evt.image}
                date={evt.date}
                location={evt.location}
                id={evt.id} isFeatured={evt.isFeatured}            />)}
        </ul>
    )
}

export default EventList
