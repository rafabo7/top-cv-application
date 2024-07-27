import { InputField } from "./InputField"
import EducationDisplay from "./EducationDisplay"

import '../Styles/InputSections.css'


export function Education ({education, isOpen, toggleIsOpen, onChange}) {

    const { degree, year, school, city } = education

    return (
        <section className={`education section`}>
            
            <header className="section-header">
                <h2>Education</h2>
                <button
                onClick={() => {
                    const sectionToChange = isOpen ? '' : 'education'
                    toggleIsOpen(sectionToChange)}}>{
                    isOpen ? 'Close' : 'Open'}
                </button>
            </header>

            { 
            isOpen && ( 
                <EducationDisplay 
                education={education} />
             ) }

            {
                isOpen && (
                    <form id={0}>
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

                    
                    
                    
                    </ form>
                )
            }
            
        </section>
    )



}