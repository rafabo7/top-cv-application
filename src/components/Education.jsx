import { InputField } from "./InputField"

import '../Styles/InputSections.css'


export function Education ({education, isOpen, toggleIsOpen, onChange}) {

    const { degree, year, school, city } = education

    return (
        <section className={`education section`}>
            
            <header className="section-header">
                <p>Education</p>
                <button
                onClick={() => {
                    const sectionToChange = isOpen ? '' : 'education'
                    toggleIsOpen(sectionToChange)}}>{
                    isOpen ? 'Close' : 'Open'}
                </button>
            </header>
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
                    <InputField />
                    <InputField />
                    <InputField />
                    </ form>
                )
            }
            
        </section>
    )



}