import '../Styles/Output.css'

export function Output ({ personalInfo, education }) {
    const { fullName, email, phoneNumber, city } = personalInfo

    return (
        <section className="output">
            <main>
                <h2>{fullName}</h2>
                <footer className="details">
                    <p>{email}</p>
                    <p>{phoneNumber}</p>
                    <p>{city}</p>
                </footer>

                    <div>
                        {education.map( (item) => {
                            return (
                            <li
                                key={item.id}>
                                    <p>{item.degree}</p>
                                    <p>{item.year}</p>
                                    <p>{item.school}</p>
                                    <p>{item.city}</p>
                            </li>
                            )
                        })}
                    </div>
                



            </main>

        </section>
        
    )
}