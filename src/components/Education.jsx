import { EducationDisplay } from './EducationDisplay'
import { EducationForm } from './EducationForm'

import '../Styles/InputSections.css'


export function Education ({
    education,
    isOpen,
    toggleIsOpen,
    onSave,
    onDelete,
    onEdit,
    toEdit}) {

    
    const { degree, year, school, city } = education


    return (
        <section className={`education section`}>
            
            <header className="section-header">
                <h2>Education</h2>
                <button
                    className='open-button'
                    onClick={() => {
                        const sectionToChange = isOpen ? '' : 'education'
                        toggleIsOpen(sectionToChange)}}>{
                        isOpen ? 'Close' : 'Open'}
                </button>
            </header>

            { 
            isOpen && ( 
                <>
                <EducationDisplay 
                    education={education}
                    onDelete={onDelete}
                    onEdit={onEdit}  />

                <EducationForm
                onSave={onSave}
                toEdit={toEdit}
                education={education} />
                </>

             ) }

            
        </section>
    )



}