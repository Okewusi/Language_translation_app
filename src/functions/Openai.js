const { Configuration, OpenAIApi} = require('openai');
const configuration = new Configuration({
    apiKey: process.env.REACT_APP_KEY,
})
const openai = new OpenAIApi(configuration)



export const translate = async (text, language,setResponses, setLoading, setText) =>{


    try {
        // set loading to true before calling API
        if(!text.length){
            alert('input text to translate')
            return
        }
        setLoading(true);

        const response = await openai.createCompletion("text-davinci-002", {
            prompt: `Translate this into ${language}\n${text}`,
            temperature: 0.3,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            
        });
        setResponses((oldresponses)=>[{
            id: response.data.id,
            text: text,
            language : language,
            response: response.data.choices[0].text
        },...oldresponses])
        // switch loading to false after fetch is complete
        setLoading(false);
        setText('');
    } catch (error) {
        // add error handling here
        alert('unable to translate')
        console.log(error.response.data.error)
        setLoading(false);
    }
}

export const getText = (event, setPrompt)=>{
    setPrompt(event.target.value)
    
}

export const getLanguage = (event, setLanguage)=>{
    setLanguage(event.target.value)
}