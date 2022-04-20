import type { GetStaticPropsContext, NextPage, NextPageContext } from 'next'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import EventContent from '../../components/event-detail/event-content'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventSummary from '../../components/event-detail/event-summary'
import { getAllEvents, getEventById } from '../../data/dummy-data'
import { EventData } from '../../data/types'

const EventDetailPage= (props:{selectedEvent:EventData})=>{
    const event = props.selectedEvent
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

export async function getStaticProps(context:GetStaticPropsContext){
    const eventId = context?.params?.eventId as string

    const event = getEventById(eventId)

    return{
        props:{
            selectedEvent:event
        }
    }

}

export async function getStaticPaths(){
    const events = await getAllEvents()
    const paths = events.map(event=>({params:{eventId:event.id}}))
    return{
        paths: paths,
        fallback:false
    }
}
   

export default EventDetailPage