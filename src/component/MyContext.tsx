 import {createContext,MouseEvent,SyntheticEvent,useContext,useState} from "react";

    export interface IinstialState{
        userName?:string,
        userLocation?:string,
    }

interface IcontextProvider{
    user:Object;
    display:Object;
    handleChange:(e:SyntheticEvent<HTMLInputElement>)=>void;
    handleSubmit:(e:MouseEvent<HTMLButtonElement>)=>void;
}

interface Tchildren{children:React.ReactNode}

 export const UserContext=createContext({} as IcontextProvider);

 export default function UserContextProvider({children}:Tchildren){

    const [user,setUser]=useState({} as  IinstialState)

     const [display,setDisplay]=useState({} as IinstialState)

     const handleChange=(e:SyntheticEvent<HTMLInputElement>)=>{
         const {name,value}=e.currentTarget
         setUser({...user,[name]:value})
     }
     const handleSubmit=(e:MouseEvent<HTMLButtonElement>)=>{
         e.preventDefault();
         setDisplay(user)
     }
     
 return <UserContext.Provider value={{user,display,handleChange,handleSubmit}}>
         {children}
     </UserContext.Provider>
 }

  export function UseUserContext(){
      const {user,display,handleChange,handleSubmit}=useContext(UserContext);

      return{user,display,handleChange,handleSubmit}
  }

