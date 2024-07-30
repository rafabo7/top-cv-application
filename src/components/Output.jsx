import { EducationOutput } from './EducationOutput.jsx'
import '../Styles/Output.css'
import { ExperienceOutput } from './ExperienceOutput.jsx'

export function Output ({ personalInfo, education, experience }) {
    const { fullName, email, phoneNumber, city } = personalInfo

    return (
        <section className="output">
            <main>
                <section className='output resume-header'>
                    <h2>{fullName}</h2>
                    <footer className="details">
                        <p>{email}</p>
                        <p>{phoneNumber}</p>
                        <p>{city}</p>
                    </footer>
                </section>

                    <div className="education-output">
                        <h4 className="output-section-header">Education</h4>
                        <EducationOutput 
                            education={education} />
                    </div>
                    
                    <div>
                    <h4 className="output-section-header">Experience</h4>
                    <ExperienceOutput experience={experience}/>

                        
                    </div>

                



            </main>

        </section>
        
    )
}