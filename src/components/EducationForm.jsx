import { InputField } from "./InputField"

export function EducationForm ({ onSave }) {

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
                    data-key="degree" 
                    placeHolder="The studies yout took" />
                    
                    <InputField 
                    labelText="School" 
                    id="school" 
                    type="text" 
                    data-key="school" 
                    placeHolder="Issued by" />
                    
                    <InputField 
                    labelText="Year" 
                    id="year" 
                    type="text" 
                    data-key="year" 
                    placeHolder="Year of expedition" />
                    
                    <InputField 
                    labelText="City" 
                    id="city" 
                    type="text" 
                    data-key="city" 
                    placeHolder="Location" />

                    <input type='submit' value='Save'/>

                    
                    
                    
                    </ form>
    )

}