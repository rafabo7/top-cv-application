

export function Output ({ personalInfo }) {
    const { fullName } = personalInfo
    

    return (
        <section className="output">
            <h2>Output</h2>
            <main>
                <h2>{fullName}</h2>

            </main>

        </section>
        
    )
}