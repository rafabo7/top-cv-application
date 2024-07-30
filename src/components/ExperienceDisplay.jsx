
export function ExperienceDisplay ({ experience, onDelete }) {

    return ( 
        experience.map(
             ( item ) => <p key={item.id} >
                {item. time} / {item.position}
                <button onClick={() => onDelete(item, 'experience')}>Delete</button>
                <button>Edit</button>
                </p>)
     )


}