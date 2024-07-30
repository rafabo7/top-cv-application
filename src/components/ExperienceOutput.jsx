import '../Styles/EdExOutput.css'


export function ExperienceOutput ({ experience }) {

    return (
        <>
        {experience.map( (item) => {
            return (
            <article className="section-output-article"
                key={item.id}>
                    <div className='section-output left-col'>
                        <p>{item.time}</p>
                        <p>{item.city}</p>
                    </div>

                    <div className='section-output right-col'>
                        <p className='bold'>{item.company}</p>
                        <p>{item.position}</p>
                        <p>{item.description}</p>
                    </div>
            </article>
            )
        })}
        </>
    )
}