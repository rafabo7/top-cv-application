import { InputField } from "./InputField"
import '../Styles/Interface.css'

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

            <InputField
            type='email'
            id='email'
            labelText="Email"
            data-key="email"
            placeHolder="example55@email.com"
            onChange={onChange}
            />

            <InputField
            type='tel'
            id='phoneNumber'
            labelText="Phone number"
            data-key="phoneNumber"
            placeHolder="+44 834 283 483"
            onChange={onChange}
            />

            <InputField
            type='text'
            id='city'
            labelText="City"
            data-key="city"
            placeHolder="Greenbow, Alabama"
            onChange={onChange}
            />

            
        </section>
    )
}