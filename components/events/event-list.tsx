import EventItem, { EventData } from "./event-item"
import styles from './event-list.module.css'

interface EventListProps{
    items : Array<EventData>
}

const EventList = (props:EventListProps)=>{
    const {items }= props

    return (
        <ul className={styles.list}>
            {items.map((evt:any) => <EventItem
            key={evt.id}
            title={evt.title}
            image={evt.image}
            date={evt.date} 
            location={evt.location}
            id={evt.id}
            />)}
        </ul>
    )
}

export default EventList
