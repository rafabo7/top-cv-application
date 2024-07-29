export function EducationDisplay ({ education }) {

    return ( 
        education.map( ( item ) => <h4 key={item.id} >{item.year} - {item.degree}</h4>)
     )


}