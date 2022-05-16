import React, {useContext, useEffect} from 'react'
import Prompt from '../Prompt/Prompt'
import Response from '../Response/Response'
import './home.css'
import { Context } from '../../context/Context'





const Home = () => {
    const[prompt, setPrompt,language,setLanguage,responses,setResponses,loading,setLoading] = useContext(Context);

    // save and retrieve data from local storage, this helps retain data after page is reloaded
    useEffect(()=>{
        const data = window.localStorage.getItem('translate');
        setResponses(JSON.parse(data))
        console.log(data)
    }, [])
   

    useEffect(() => {
        window.localStorage.setItem('translate',JSON.stringify(responses));
    }, [responses]);
    
  return (
    <div className='container'>
        <main className='maincontainer'>
            <header>OPEN AI</header>
            <h1>Get a quick, free translation.</h1>
            <p className='desc'> Translate from english to German, Chinese, French, Spanish, Japanese, Russian, Arabic, Portuguese, Dutch or Greek</p>
            <Prompt />
            <h2>Translation Results</h2>
            <article className='responsecontainer'>
                {responses.length ? responses.map((response=>(
                 <Response key={response.id} response={response}/>
                ))): null}
            </article>
        </main>
        
    </div>
  )
}

export default Home