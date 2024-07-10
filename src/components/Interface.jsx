

export function Interface () {

    return (
        <section className="interface">
            <h2>Interface</h2>
            <section className="form">
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" />
            </section>
            <footer>
                <button>Save</button>
                <button>Delete</button>
            </footer>
        </section>
    )
}