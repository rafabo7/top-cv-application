export function EducationDisplay ({ education, onDelete, onEdit }) {

    return ( 
        education.map( 
            ( item ) => <p key={item.id} >
            {item.year} / {item.degree}
            <button onClick={() => onDelete(item, 'education')}>Delete</button>
            <button>Edit</button>
            </p>
            )
     )


}