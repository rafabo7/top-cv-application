import { useState } from 'react'

import { Interface } from './components/Interface'
import { Output } from './components/Output'

import './App.css'

function App() {
  const [personalInfo, setPersonalInfo] = useState("")

  function showContent (e) {
    const info = e.target.value
    setPersonalInfo(info)

  }


  return (
    <>
    <Interface onSave={showContent} />
    <Output personalInfo={personalInfo} />
      
    </>
  )
}

export default App
