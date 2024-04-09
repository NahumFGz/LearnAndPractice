import React, { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const [name, setName] = useState('x')

    const handleClick = () => {
        setName('x!')
    }

    return (
        <>
            <section className='App'>
                <TwitterFollowCard userName={'midudev'}>
                    Miguel Ángel Durán
                </TwitterFollowCard>

                <TwitterFollowCard initialIsFollowing={false} userName={'nahumfgz'}>
                    Nahum Flores Gutierrez
                </TwitterFollowCard>

                <TwitterFollowCard initialIsFollowing={true} userName={name}>
                    Nahum Flores Gutierrez
                </TwitterFollowCard>

                <button onClick={handleClick}>
                    Cambio nombre
                </button>
            </section>
        </>
    )
}
