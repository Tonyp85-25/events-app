import Link from 'next/link'
import { ReactElement } from 'react'

import classes from './button.module.css'

interface ButtonProps{
    link?:string
    children?: ReactElement|string|ReactElement[]
    onClick?: ()=>void
}

function Button(props:ButtonProps)
{
    if(props.link){
        return(
            <Link href={props.link}>
                <a className={classes.btn}>{props.children}</a>
            </Link>
        )
    }
    return (
        <button className={classes.btn} onClick={props.onClick} >{props.children}</button>
    )
   
}

export default Button
