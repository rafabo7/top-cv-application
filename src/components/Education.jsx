import { InputField } from "./InputField"

import '../Styles/InputSections.css'


export function Education ({education, isOpen, toggleIsOpen}) {

    const { degree, year, school } = education

    return (
        <section className={`education section`}>
            
            <p>Education</p>
            <button
            onClick={() => {
                const sectionToChange = isOpen ? '' : 'education'
                toggleIsOpen(sectionToChange)}}>{
                isOpen ? 'Close' : 'Open'}
            </button>
            {
                isOpen && (
                    <>
                    <InputField />
                    <InputField />
                    <InputField />
                    <InputField />
                    </>
                )
            }
            
        </section>
    )



}