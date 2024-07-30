import '../Styles/EdExDisplay.css'

export function ExperienceDisplay ({ experience, onDelete }) {

    return ( 
        experience.map(
             ( item ) => <p 
             className="item-display" key={item.id} >
                {item. time} / {item.position}
                <button 
                    onClick={() => onDelete(item, 'experience')}
                    className='delete-button'
                        >Delete</button>
                <button>Edit</button>
                </p>)
     )


}