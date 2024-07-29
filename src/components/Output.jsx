import { EducationOutput } from './EducationOutput.jsx'
import '../Styles/Output.css'

export function Output ({ personalInfo, education, experience }) {
    const { fullName, email, phoneNumber, city } = personalInfo

    return (
        <section className="output">
            <main>
                <h2>{fullName}</h2>
                <footer className="details">
                    <p>{email}</p>
                    <p>{phoneNumber}</p>
                    <p>{city}</p>
                </footer>

                    <div className="education-output">
                        <h4 className="output-section-header">Education</h4>
                        <EducationOutput 
                            education={education} />
                    </div>
                    
                    <div>
                    <h4 className="output-section-header">Experience</h4>

                        {experience.map( (item) => {
                            return (
                            <li
                                key={item.id}>
                                    <p>{item.position}</p>
                                    <p>{item.company}</p>
                                    <p>{item.city}</p>
                                    <p>{item.time}</p>
                            </li>
                            )
                        })}
                    </div>

                



            </main>

        </section>
        
    )
}