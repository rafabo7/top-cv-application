import { InputField } from "./InputField"
import '../Styles/PersonalInfo.css'

export function PersonalInfo ({ onChange }) {

    return (
        <section className="personal-info">
            
            <InputField 
            type="text"
            id="fullName"
            labelText="Full Name"
            data-key="fullName"
            placeHolder="First and last name"
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