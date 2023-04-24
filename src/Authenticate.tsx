import React from 'react'

const Authenticate = () => {

    const handleClick=()=> {
        window.open("http://localhost:8000/auth/google", "_self")
    }
  return (
    <button style={{display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"}}
    onClick={handleClick}>
        Authenticate
    </button>
  )
}

export default Authenticate