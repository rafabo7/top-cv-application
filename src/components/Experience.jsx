import { ExperienceForm } from "./ExperienceForm"
import { ExperienceDisplay } from "./ExperienceDisplay"
import '../Styles/InputSections.css'


export function Experience ({experience, isOpen, toggleIsOpen, onChange, onSave}) {


    return (
        <section className={`experience section`}>
            
            <header className="section-header">
                <h2>Experience</h2>
                <button
                onClick={() => {
                    const sectionToChange = isOpen ? '' : 'experience'
                    toggleIsOpen(sectionToChange)}}>{
                    isOpen ? 'Close' : 'Open'}
                </button>
            </header>

            { 
            isOpen && ( 
                <>
                <ExperienceDisplay 
                experience={experience} />

                <ExperienceForm onSave={onSave} />
                </>
             ) }

            
        </section>
    )



}