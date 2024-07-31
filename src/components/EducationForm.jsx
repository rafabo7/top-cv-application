import { InputField } from "./InputField"

export function EducationForm ({ onSave, toEdit }) {

    


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
                    placeHolder="The studies yout took"
                    defaultValue={toEdit ? toEdit.degree : ""} />
                    
                    <InputField 
                    labelText="School" 
                    id="school" 
                    type="text" 
                    data-key="school" 
                    placeHolder="Issued by"
                    defaultValue={toEdit ? toEdit.school : ""} />
                    
                    <InputField 
                    labelText="Year" 
                    id="year" 
                    type="text" 
                    data-key="year" 
                    placeHolder="Year of expedition"
                    defaultValue={toEdit ? toEdit.year : ""} />
                    
                    <InputField 
                    labelText="City" 
                    id="city" 
                    type="text" 
                    data-key="city" 
                    placeHolder="Location"
                    defaultValue={toEdit ? toEdit.city : ""} />

                    <input className="save-button" type='submit' value='Save'/>

                    
                    
                    
                    </ form>
    )

}