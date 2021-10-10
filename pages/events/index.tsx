import type { NextPage } from 'next'

import EventList from '../../components/events/event-list'
import { getAllEvents } from '../../data/dummy-data'

const EventListPage :NextPage= ()=>{

    const events =getAllEvents()
    return(
        <div>
            <EventList items={events}/>
        </div>
    )
}

    
    


export default EventListPage