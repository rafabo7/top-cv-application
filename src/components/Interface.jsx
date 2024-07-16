import { PersonalInfo } from "./PersonalInfo"
import '../Styles/Interface.css'
import { Education } from "./Education"

export function Interface ({ onChange, personalInfo, education, experience, isOpen, toggleIsOpen }) {

    return (
        <section className="interface">
            <PersonalInfo onChange={onChange} />
            <Education  
            education={education}
            isOpen={isOpen == 'education'}
            toggleIsOpen={toggleIsOpen}  />

            
        </section>
    )
}