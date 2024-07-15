import { PersonalInfo } from "./PersonalInfo"
import '../Styles/Interface.css'

export function Interface ({ onChange }) {

    return (
        <section className="interface">
            <PersonalInfo onChange={onChange} />

            
        </section>
    )
}