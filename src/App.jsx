import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Link from './Link'
import IfXHasMillion from './IfXHasCopyPastaGenerator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Nahian Shabab</h1>
      <Link></Link>
      <IfXHasMillion initialIsFan={true}></IfXHasMillion>
    </>
  )
}

export default App
