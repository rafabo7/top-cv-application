import '../Styles/Output.css'

export function Output ({ personalInfo }) {
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

            </main>

        </section>
        
    )
}