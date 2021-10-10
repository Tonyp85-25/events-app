import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import EventContent from '../../components/event-detail/event-content'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventSummary from '../../components/event-detail/event-summary'
import { getEventById } from '../../data/dummy-data'

const EventDetailPage :NextPage= ()=>{
    const router = useRouter()

    const eventId = router.query.eventId as string
    const event = getEventById(eventId)
    if(!event){
        return (
            <p>No events found!</p>
        )
    }

    return( <Fragment>
        <EventSummary title={event.title}/>
        <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title}/>
        <EventContent>
            <p>{event.description}</p>
        </EventContent>

    </Fragment>)
}
   

export default EventDetailPage