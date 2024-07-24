import { PersonalInfo } from "./PersonalInfo"
import '../Styles/Interface.css'
import { Education } from "./Education"

export function Interface ({ onChange, onSectionChange, personalInfo, education, experience, isOpen, toggleIsOpen }) {

    return (
        <section className="interface">
            <PersonalInfo onChange={onChange} />
            <Education  
            education={education}
            onChange={onSectionChange}
            isOpen={isOpen == 'education'}
            toggleIsOpen={toggleIsOpen}  />

            
        </section>
    )
}