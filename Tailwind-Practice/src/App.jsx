import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div style={{ display : 'flex', justifyContent : 'space-around'}}>
      <div style={{backgroundColor : 'red'}}>
        <h1>Hello World</h1>
      </div>
      <div style={{backgroundColor : 'green'}}>
        <h1>Hello World</h1>
      </div>
      <div style={{backgroundColor : 'blue'}}>
        <h1>Hello World</h1>
      </div>
    </div>
  )
}

export default App
