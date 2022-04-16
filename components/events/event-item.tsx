import Link from 'next/link'
import React from 'react'

import styles from './event-item.module.css'
import Button from '../ui/button'
import DateIcon from '../icons/date-icon'
import AddressIcon from '../icons/address-icon'
import ArrowRightIcon from '../icons/arrow-right-icon'

export interface EventData{
    title:string
    image: string 
    date:string 
    location: string
    id:string
    key?:string|number
    isFeatured?: boolean
}

function EventItem(props:EventData){

    const {title, image, date, location, id} =props
    const readableDate = new Date(date).toLocaleString('en-US',{day:'numeric',month:'long',year:'numeric'})
    const formattedAddress = location.replace(', ', '\n')
    const exploreLink = `/events/${id}`

    return(
        <li className={styles.item}>
            <img src={'/'+image}
            alt={title}/>
            <div className={styles.content}>
                <div className={styles.summary}>
                    <h2>
                    {title}
                    </h2>
                    <div className={styles.date}>
                        <DateIcon/>
                        <time>{readableDate}</time>
                    </div>
                    <div className={styles.address}>
                        <AddressIcon/>
                        <address>{formattedAddress}</address>
                    </div>
                    <div className={styles.actions}>
                        <Button link={exploreLink}>
                           <span>Explore event</span> 
                           <span className={styles.icon}><ArrowRightIcon/> </span>
                            </Button>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default EventItem