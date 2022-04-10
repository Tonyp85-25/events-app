import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import EventList from '../../components/events/event-list'
import { getFilteredEvents } from '../../data/dummy-data'

const EventFiltered :NextPage= ()=>{
    const router =useRouter()
    const filterData= router.query.slug
    if(!filterData){
        return <p className='center'>Loading...</p>
    }
    const filteredYear =filterData[0]
    const filteredMonth =filterData[1]

    const numYear = +filteredYear
    const numMonth = +filteredMonth

    if(isNaN(numMonth)|| isNaN(numYear)||numYear>2030 ||numYear<2021||numMonth<1 ||numMonth>12 ){
        return <p>Invalid filter. Please adjust your values</p>
    }
    const filteredEvents = getFilteredEvents({
        year:numYear,
        month:numMonth
    })
    if(!filteredEvents || filteredEvents.length === 0){
        return <p>No events found!</p>
    }
    return(
        <Fragment>
            <EventList items={filteredEvents}/>
        </Fragment>
   )
}
   

export default EventFiltered