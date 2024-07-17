import { InputField } from "./InputField"

import '../Styles/InputSections.css'


export function Education ({education, isOpen, toggleIsOpen}) {

    const { degree, year, school } = education

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