export interface EventData{
    title:string
    image: string 
    date:string 
    location: string
    id:string
    key?:string|number
    isFeatured: boolean
    description?:string
}

export interface EventListProps{
    items : Array<EventData>
}