import { PersonalInfo } from "./PersonalInfo"
import '../Styles/Interface.css'
import { Education } from "./Education"
import { Experience } from "./Experience"

export function Interface ({ onChange,
    onSectionChange,
    personalInfo,
    education,
    experience,
    isOpen,
    toggleIsOpen,
    toggleIsCollapsed,
    onSave,
    onDelete }) {

    return (
        <section className="interface">
            <PersonalInfo onChange={onChange} />
            <Education  
            education={education}
            onChange={onSectionChange}
            isOpen={isOpen == 'education'}
            toggleIsOpen={toggleIsOpen}
            toggleIsCollapsed={toggleIsCollapsed}
            onSave={onSave} 
            onDelete={onDelete} />
            
            <Experience  
            experience={experience}
            onChange={onSectionChange}
            isOpen={isOpen == 'experience'}
            toggleIsOpen={toggleIsOpen}
            toggleIsCollapsed={toggleIsCollapsed}
            onSave={onSave}
            onDelete={onDelete}  />

            
        </section>
    )
}