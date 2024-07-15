

export function Output ({ personalInfo }) {
    const { fullName, email, phoneNumber, city } = personalInfo
    

    return (
        <section className="output">
            <h2>Output</h2>
            <main>
                <h2>{fullName}</h2>
                <section className="details">
                    <p>{email}</p>
                    <p>{phoneNumber}</p>
                    <p>{city}</p>
                </section>

            </main>

        </section>
        
    )
}