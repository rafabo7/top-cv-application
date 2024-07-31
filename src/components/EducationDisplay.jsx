import '../Styles/EdExDisplay.css'


export function EducationDisplay ({ education, onDelete, onEdit }) {

    return ( 
        education.map( 
            ( item ) => <p 
            className="item-display" key={item.id} >
            {item.year} / {item.degree}
            <button 
                onClick={() => onDelete(item, 'education')}
                className='delete-button'>
                    Delete
                    </button>
            <button onClick={() => {
                onEdit(item, 'education')
                onDelete(item, 'education')
                }}>Edit</button>
            </p>
            )
     )


}