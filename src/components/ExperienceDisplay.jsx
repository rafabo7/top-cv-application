export default function ExperienceDisplay ({ experience }) {

    return ( 
        experience.map( ( item ) => <h4 key={item.id} >{item.position}</h4>)
     )


}