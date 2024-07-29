import { useState } from 'react'
import uniqid from 'uniqid'

import { Interface } from './components/Interface'
import { Output } from './components/Output'
import exampleData from './ExampleData'

import './App.css'

function App() {
  //Data states
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo)
  const [education, setEducation] = useState(exampleData.education)
  const [experience, setExperience] = useState(exampleData.experience)

  //State for one section open at a time
  const [open, setOpen] = useState('education')

  function handlePersonalInfoChange (e) {
    const { key } = e.target.dataset
    const value = e.target.value
    setPersonalInfo({ ...personalInfo, [key]: value })
  }

  function toggleIsOpen(section) {
    setOpen(section)
  }


  function handleSectionChange (e) {
    const section  = open
    const { key } = e.target.dataset
    const form = e.target.closest('form')
    const id = form.id
    const value = e.target.value


    if (section === 'education') {
      const newEducation = education.map( (item) => {
        if ( item.id === id ) item[key] = value
        return item
      }
    )
      setEducation(newEducation)
    }
  }
function onSave (e, section) {
  const form = e


  if ( section === 'education') addEducationInfo(form)
  if ( section === 'experience') addExperienceInfo(form)

}

function addEducationInfo(form) {
  const degree = form.querySelector('#degree').value
  const school = form.querySelector('#school').value
  const year = form.querySelector('#year').value
  const city = form.querySelector('#city').value

  const newEntry = {
    degree,
    year,
    school,
    city,
    id: uniqid() 
  }

  console.log(degree, school, year, city)

  const newEducation = [...education, newEntry]

  form.reset()



  setEducation(newEducation)
  

}

  return (
    <main className='app' >
    <Interface 
      onChange={handlePersonalInfoChange}
      onSectionChange={handleSectionChange} 
      personalInfo={personalInfo}
      education={education}
      experience={experience} 
      isOpen={open}
      toggleIsOpen={toggleIsOpen}
      onSave={onSave} />

    <Output 
      personalInfo={personalInfo}
      education={education}
      experience={experience} />
      
    </main>
  )
}

export default App
