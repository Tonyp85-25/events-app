import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { EventData } from '../data/types'
import EventList from '../components/events/event-list'
import EventSearch from '../components/events/events-search'
import { getFeaturedEvents } from '../data/dummy-data'
import styles from '../styles/Home.module.css'

const Home = (props: { featuredEvents: EventData[]}) => {
  const {featuredEvents} =props
  const router =useRouter()

  function findEventsHandler(year:string, month:string){
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)

  }

  return (
  <Fragment>
    <EventSearch onSearch={findEventsHandler}/>
    <EventList items={featuredEvents}/>
  </Fragment>
  )
}

export async function getStaticProps() {
  return {
    props:{
      featuredEvents: getFeaturedEvents()
    }
  }
}

export default Home
