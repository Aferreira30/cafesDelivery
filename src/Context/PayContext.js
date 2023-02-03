import React,{createContext,useState} from 'react'

export const PayContext = createContext()

 export function PayProvider(props){
    const [pay, setPay] = useState();
  return (
    <PayContext.Provider value={[pay, setPay]}>
        {props.children}
    </PayContext.Provider>
  )
}
