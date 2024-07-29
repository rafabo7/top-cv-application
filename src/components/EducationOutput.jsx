import '../Styles/EducationOutput.css'

export function EducationOutput ({ education }) {


    return (
        <>
        {education.map( (item) => {
            return (
            <article className="education-output article"
                key={item.id}>
                    <div className="education-output article left-col">
                        <p>{item.year}</p>
                        <p>{item.city}</p>
                    </div>

                    <div className="education-output article right-col">
                        <p>{item.school}</p>
                        <p>{item.degree}</p>
                    </div>
            </article>
            )
        })}
        </>
    )
}