

export function Interface ({ onSave }) {

    return (
        <section className="interface">
            <h2>Interface</h2>
            <section className="form">
                <label htmlFor="firstName">First Name</label>
                <input 
                type="text" 
                name="firstName" 
                id="firstName"
                onChange={onSave} />
            </section>
            
        </section>
    )
}