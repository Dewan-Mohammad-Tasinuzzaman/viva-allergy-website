'use client'

import React, { FormEvent, useState } from 'react'

const MiniQuoteForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [zip, setZip] = useState('')

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify({
                    name, email, zip,
                }),
                headers: {
                    'content-type': 'application/json',
                },
            })
        } catch(err:any) {
            console.error('Err', err)
        }
    }

    return (
        <form className='miniForm' onSubmit={onSubmit}>
            <input className='miniForm__textInput miniForm__textInput_name'
                value={name} 
                onChange={(e) => setName(e.target.value)}
                type="text" placeholder='Name' 
            />

            <input className='miniForm__textInput miniForm__textInput_email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email" placeholder='Email' 
            />

            <input className='miniForm__textInput miniForm__textInput_zip'
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                type="text" placeholder='ZIP' 
            />

            <button className='miniForm__submitButton' type='submit'>Get A Quote</button>
        </form>
    )

}

export default MiniQuoteForm