import React from 'react'
import { createContext } from 'react'
import { styleObj } from './style'


export const styleObjContext = createContext(styleObj);

interface styleProps {
    children: React.ReactNode
}

export const styleContextProvider = ({children}: styleProps) => {
    return <styleObjContext.Provider value={styleObj}>{children}</styleObjContext.Provider>
  
}

