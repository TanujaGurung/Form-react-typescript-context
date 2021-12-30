 import React from 'react'
 import  UserContextProvider  from './MyContext'
 import DisplayComponent from './Display'
 import InputComponent from './InputComponent'

 function Components() {

   return (
     <UserContextProvider>
     <>
       <InputComponent />
       <DisplayComponent />
       </>
        </UserContextProvider>
   )
 }

 export default Components
