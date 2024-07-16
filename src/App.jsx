import { useState } from 'react'
import { useId } from 'react'

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
    const { section } = exampleData
    
  }


  return (
    <main className='app' >
    <Interface 
      onChange={handlePersonalInfoChange} 
      personalInfo={personalInfo}
      education={education}
      experience={experience} 
      isOpen={open}
      toggleIsOpen={toggleIsOpen} />
    <Output personalInfo={personalInfo} />
      
    </main>
  )
}

export default App
