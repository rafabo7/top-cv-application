import '../Styles/EdExOutput.css'

export function EducationOutput ({ education }) {


    return (
        <>
        {education.map( (item) => {
            return (
            <article className="section-output-article"
                key={item.id}>
                    <div className="section-output left-col">
                        <p>{item.year}</p>
                        <p>{item.city}</p>
                    </div>

                    <div className="section-output right-col">
                        <p className='bold'>{item.school}</p>
                        <p>{item.degree}</p>
                    </div>
            </article>
            )
        })}
        </>
    )
}