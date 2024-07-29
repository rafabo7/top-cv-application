import { InputField } from "./InputField"

export function EducationForm ({ onChange, onSave }) {

    return (
        <form className="education-form" 
        onSubmit={ (e) => {
            e.preventDefault()
            onSave(e.target, 'education')}}
        >
                    <InputField 
                    labelText="Degree" 
                    id="degree" 
                    type="text" 
                    onChange={onChange}
                    data-key="degree" 
                    placeHolder="The studies yout took" />
                    
                    <InputField 
                    labelText="School" 
                    id="school" 
                    type="text" 
                    onChange={onChange}
                    data-key="school" 
                    placeHolder="Issued by" />
                    
                    <InputField 
                    labelText="Year" 
                    id="year" 
                    type="text" 
                    onChange={onChange}
                    data-key="year" 
                    placeHolder="Year of expedition" />
                    
                    <InputField 
                    labelText="City" 
                    id="city" 
                    type="text" 
                    onChange={onChange}
                    data-key="city" 
                    placeHolder="Location" />

                    <input type='submit' value='Save'/>

                    
                    
                    
                    </ form>
    )

}