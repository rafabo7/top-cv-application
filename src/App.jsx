import { useState } from 'react'

import { Interface } from './components/Interface'
import { Output } from './components/Output'
import exampleData from './ExampleData'

import './App.css'

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo)

  function handlePersonalInfoChange (e) {
    const { key } = e.target.dataset
    const value = e.target.value
    setPersonalInfo({ ...personalInfo, [key]: value })

  }


  return (
    <>
    <Interface onChange={handlePersonalInfoChange} personalInfo={personalInfo} />
    <Output personalInfo={personalInfo} />
      
    </>
  )
}

export default App
