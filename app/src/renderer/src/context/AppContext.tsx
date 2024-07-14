import { list_models } from '@/utils/model.utils';
import React, { useEffect } from 'react'

export const Appcontext = React.createContext({})

export const AppProvider = (props : {
    children : React.ReactNode
}) => {

    const [models , setModels] = React.useState([]);
    useEffect(() => {
        list_models().then(res => {
            setModels(res.models)
        }).catch(err => {
            console.log(err);
        })
    },[])

  return (
    <Appcontext.Provider value={{ models }}>
      {props.children}
    </Appcontext.Provider>
  )
}
