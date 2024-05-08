import React from 'react'
import './App.css'

function Square({ background }) {

    const style = {
        backgroundColor: background ? "black" : "white"
    }

    return (
        <div className='box' style={style}></div>
    )
}

export default Square