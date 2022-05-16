import React from 'react'
import './response.css'

const Response = ({response}) => {
  return (
    <article key={response.id} className='translationcontainer'>
      <article className='promptcontainer'>
        <div className='prompt'><h3>Prompt:</h3></div>
        <div className='text'><p>{response.text.toLowerCase()}</p></div>
      </article>
      <article className='rescontainer'>
        <div className='response'><h3>Response:</h3></div>
        <article className='translate'>
          <p className='language'>{response.language.toUpperCase()}</p>
          <p>{response.response.toLowerCase()}</p>
        </article>
      </article>
    </article>
  )
}

export default Response