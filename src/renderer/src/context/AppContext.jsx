import React, { useState } from 'react'

// declare a context with default value
export const AppContext = React.createContext({})

const AppContextProvider = (props) => {
  const { children } = props
  const [model, setModel] = useState({})
  return <AppContext.Provider>{children}</AppContext.Provider>
}

export default AppContext
