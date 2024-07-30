import { InputField } from './InputField.jsx'

export function ExperienceForm ({ onSave}) {

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
                    placeHolder="Your position" />
                    
                    <InputField 
                    labelText="Company" 
                    id="company" 
                    type="text" 
                    data-key="company" 
                    placeHolder="e.g. Nestlé / My uncle's company etc." />
                    
                    <InputField 
                    labelText="Description" 
                    id="description" 
                    type="textarea" 
                    data-key="description" 
                    placeHolder="The role you played in the company, the goals you achivied, the projects you worked on, etc. Keep it simple." />
                    
                    <InputField 
                    labelText="Time" 
                    id="time" 
                    type="text" 
                    data-key="time" 
                    placeHolder="2022 - present" />
                    
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