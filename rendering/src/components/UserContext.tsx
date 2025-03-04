'use client'

import { createContext, useContext } from "react"


type User = {
    name: string,
    email: string,
    age: number
  }
  
  const userData:User = {
    name: 'ABCD',
    email: 'abcd@gmail.com',
    age: 23
  }
  
  const RootContext = createContext<User>(userData)

  export const RootProvider = ({children}:{children: React.ReactNode}) => {
    return(
        <RootContext value={userData}>
            {children}
        </RootContext>
    )
  }

  export const useRootContext = () => useContext(RootContext)