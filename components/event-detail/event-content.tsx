import { ComponentProps, ReactChild, ReactElement } from 'react';
import classes from './event-content.module.css';

interface EventContentProps{
  children: ReactChild 
}

function EventContent(props:EventContentProps) {
  return (
    <section className={classes.content}>
      {props.children}
    </section>
  );
}

export default EventContent;
