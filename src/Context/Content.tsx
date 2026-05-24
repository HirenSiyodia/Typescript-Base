import React, { useContext } from 'react'
import { styleObjContext } from './StyleContext';

const Content = () => {
    const theme = useContext(styleObjContext);    

  return (
    <div style={{color: theme.style2.theme}}>Content
    </div>
  )
}

export default Content
