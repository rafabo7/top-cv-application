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
  const [toEdit, setToEdit] = useState({})
    
    function onEdit (item) {
        console.log(item)
        setToEdit(item)}

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

  const newEducation = [...education, newEntry]
  form.reset()
  setEducation(newEducation)
  setToEdit({})
  }

  function addExperienceInfo(form) {
    const position = form.querySelector('#position').value
    const company = form.querySelector('#company').value
    const description = form.querySelector('#description').value
    const city = form.querySelector('#city').value
    const time = form.querySelector('#time').value
  
    const newEntry = {
      position,
      company,
      description,
      city,
      time,
      id: uniqid() 
    }
  
    const newExperience = [...experience, newEntry]
    form.reset()
    setExperience(newExperience)
    setToEdit({})
    }

    function onDelete (item, section) {
      const deletedId = item.id

      if (section === 'education') deleteData(deletedId, education, section)
      if (section === 'experience') deleteData(deletedId, experience, section)
      
    }

    function deleteData(deletedId, array, section) {
      const copy = [...array]
      const newArray = copy.filter( item => item.id !== deletedId)

      console.log(newArray)

      section === 'education' ? setEducation(newArray) : setExperience(newArray)
    }
    
    

  return (
    <main className='app' >
    <Interface 
      onChange={handlePersonalInfoChange}
      personalInfo={personalInfo}
      education={education}
      experience={experience} 
      isOpen={open}
      toggleIsOpen={toggleIsOpen}
      onSave={onSave}
      onDelete={onDelete}
      toEdit={toEdit}
      onEdit={onEdit} />

    <Output 
      personalInfo={personalInfo}
      education={education}
      experience={experience} />
      
    </main>
  )
}

export default App
