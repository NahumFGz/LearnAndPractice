import React, { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    // Se pueden pasar las props, funciones y elementos

    const [name, setName] = useState('x')

    const handleClick = () => {
        setName('x!')
    }

    return (
        <>
            {/* Comentarios */}

            <section className='App'>
                <TwitterFollowCard isFollowing userName={'midudev'}>
                    Miguel Ángel Durán
                </TwitterFollowCard>

                <TwitterFollowCard isFollowing={false} userName={'nahumfgz'}>
                    Nahum Flores Gutierrez
                </TwitterFollowCard>

                <TwitterFollowCard isFollowing={false} userName={name}>
                    Nahum Flores Gutierrez
                </TwitterFollowCard>

                <button onClick={handleClick}>
                    Cambio nombre
                </button>
            </section>
        </>
    )
}