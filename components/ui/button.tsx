import Link from 'next/link'
import { ReactElement } from 'react'

import classes from './button.module.css'

interface ButtonProps{
    link:string
    children?: ReactElement|string|ReactElement[]
}

function Button(props:ButtonProps)
{
    return(
        <Link href={props.link}>
            <a className={classes.btn}>{props.children}</a>
        </Link>
    )
}

export default Button
