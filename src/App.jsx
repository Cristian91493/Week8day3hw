import { useState } from 'react'
import './App.css'
import students from './assets/students'

function App() {
  
const[studentData, setStudentData] = useState({students})
  

  return (
    <div>
      {students.map((student)=>(
        <div>{studentData}</div>
      ))}
    </div>
  )
}

export default App
