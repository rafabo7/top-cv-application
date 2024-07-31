import '../Styles/EdExDisplay.css'

export function ExperienceDisplay ({ experience, onDelete, onEdit }) {

    return ( 
        experience.map(
             ( item ) => <p 
             className="item-display" key={item.id} >
                {item. time} / {item.position}
                <button 
                    onClick={() => onDelete(item, 'experience')}
                    className='delete-button'
                        >Delete</button>
                <button onClick={() => {
                onEdit(item, 'experience')
                onDelete(item, 'experience')
                }}>Edit</button>
                </p>)
     )


}