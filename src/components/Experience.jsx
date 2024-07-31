import { ExperienceForm } from "./ExperienceForm"
import { ExperienceDisplay } from "./ExperienceDisplay"
import '../Styles/InputSections.css'


export function Experience ({experience,
    isOpen,
    toggleIsOpen,
    onSave,
    onDelete,
    onEdit,
    toEdit}) {


    return (
        <section className={`experience section`}>
            
            <header className="section-header">
                <h2>Experience</h2>
                <button
                    className='open-button'
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
                experience={experience}
                onDelete={onDelete}
                onEdit={onEdit} />

                <ExperienceForm 
                onSave={onSave}
                toEdit={toEdit} />
                </>
             ) }

            
        </section>
    )



}