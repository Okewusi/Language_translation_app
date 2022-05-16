import React,{useState,createContext} from 'react'


export const Context = createContext();

export const ContextProvider = (props) => {
    const[prompt, setPrompt] = useState('')
    const[language, setLanguage] = useState('german')
    const[responses,setResponses] = useState([])
    const[loading,setLoading] = useState(false)
  return (
    <Context.Provider value={[prompt, setPrompt,language,setLanguage,responses,setResponses, loading,setLoading]}>
        {props.children}
    </Context.Provider>
  )
}

