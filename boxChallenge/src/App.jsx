import React, { useState } from 'react'
import box from './box'
import './App.css'
import Square from './Square'

function App({ darkMode }) {

  const [square, setSquare] = useState(box)

  const style = {
    backgroundColor: darkMode ? "black" : "white"
  }

  const squareElament = square.map((box) => <Square key={box.id} background={box.on} />)



  return (
    <main>
      <h1>box go here</h1>
      {squareElament}
    </main >
  )
}

export default App