import {  ReactElement, ReactNode } from 'react';
import classes from './logistics-item.module.css';

interface LogisticsItemProps{
  icon : ()=> ReactElement
  children : ReactElement
}

function LogisticsItem(props:LogisticsItemProps) {
  const { icon:Icon} = props;
 

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
      <Icon/>
      </span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
}

export default LogisticsItem;
