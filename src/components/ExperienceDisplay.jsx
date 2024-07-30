
export function ExperienceDisplay ({ experience }) {

    return ( 
        experience.map( ( item ) => <h4 key={item.id} >{item. time} / {item.position}</h4>)
     )


}