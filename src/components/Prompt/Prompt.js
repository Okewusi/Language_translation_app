import React, { useContext} from 'react'
import './prompt.css'
import { translate , getText,getLanguage} from '../../functions/Openai'
import { Context } from '../../context/Context'

const Prompt = () => {
  const[prompt, setPrompt,language,setLanguage,responses,setResponses, loading,setLoading] = useContext(Context)
  
  return (
    <form onSubmit={(e=>{
      e.preventDefault()
      translate(prompt,language,setResponses,setLoading,setPrompt)
      
    })}>
      <textarea className='text' id='text' value={prompt} placeholder='Enter text to translate in english' onChange={(event)=>getText(event, setPrompt)}/> <br/>
      <label htmlFor='languages' >Select language to translate to:</label> <br/>
      <select id='languages' value={language} onChange={(event)=>getLanguage(event, setLanguage)}>
        <option value='german'>German</option>
        <option value='chinese'>Chinese</option>
        <option value='french'>French</option>
        <option value='spanish'>Spanish</option>
        <option value='japanise'>Japanise</option>
        <option value='russian'>Russian</option>
        <option value='arabic'>Arabic</option>
        <option value='portuguese'>Portuguese</option>
        <option value='dutch'>Dutch</option>
        <option value='greek'>Greek</option>
      </select> <br/>
      {!loading && <button>Translate</button>}
      {loading && <button disabled>Translating ...</button>}
    </form>
  )
}

export default Prompt