import { InputField } from './InputField.jsx'

export function ExperienceForm ({onSave, toEdit}) {

    return (
        <form className="education-form" 
        onSubmit={ (e) => {
            e.preventDefault()
            onSave(e.target, 'experience')}}
        >
                    <InputField 
                    labelText="Position" 
                    id="position" 
                    type="text" 
                    data-key="position" 
                    placeHolder="Your position"
                    defaultValue={toEdit ? toEdit.position : ""} />
                    
                    <InputField 
                    labelText="Company" 
                    id="company" 
                    type="text" 
                    data-key="company" 
                    placeHolder="e.g. Nestlé / My uncle's company etc." 
                    defaultValue={toEdit ? toEdit.company : ""}/>
                    
                    <InputField 
                    labelText="Description" 
                    id="description" 
                    type="textarea" 
                    data-key="description" 
                    placeHolder="The role you played in the company, the goals you achivied, the projects you worked on, etc. Keep it simple." 
                    defaultValue={toEdit ? toEdit.description : ""}/>
                    
                    <InputField 
                    labelText="Time" 
                    id="time" 
                    type="text" 
                    data-key="time" 
                    placeHolder="2022 - present" 
                    defaultValue={toEdit ? toEdit.time : ""}/>
                    
                    <InputField 
                    labelText="City" 
                    id="city" 
                    type="text" 
                    data-key="city" 
                    placeHolder="Location" 
                    defaultValue={toEdit ? toEdit.city : ""}/>

                    <input type='submit' value='Save'/>

                    
                    
                    
                    </ form>
    )
}