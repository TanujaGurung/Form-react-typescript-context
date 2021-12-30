import React from 'react'
import { UseUserContext } from './MyContext';


function InputComponent() {
    const {handleChange,handleSubmit}=UseUserContext();
  
  return (
    // <form onSubmit={handleSubmit}>
      <div>
      <div>
        <label htmlFor="userName">Name</label>
        <input type="text" name="userName" onChange={handleChange} />
        
        <label htmlFor="userLocation">Location</label>
        <input type="text" name="userLocation"  onChange={handleChange}/>
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      </div>
    //  </form>
  )
}

export default InputComponent
