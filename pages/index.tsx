import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import EventList from '../components/events/event-list'
import EventSearch from '../components/events/events-search'
import { getAllEvents } from '../data/dummy-data'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const events = getAllEvents()
  const router =useRouter()

  function findEventsHandler(year:string, month:string){
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)

  }

  return (
  <Fragment>
    <EventSearch onSearch={findEventsHandler}/>
    <EventList items={events}/>
  </Fragment>
  )
}

export default Home
