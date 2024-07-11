import { InputField } from "./InputField"

export function Interface ({ onChange, personalInfo }) {
    const { fullName } = personalInfo

    return (
        <section className="interface">
            <h2>Interface</h2>
            <InputField 
            type="text"
            id="fullName"
            labelText="Full Name"
            data-key="fullName"
            placeHolder={fullName}
            onChange={onChange} />
            
        </section>
    )
}