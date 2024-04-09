import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    // Se pueden pasar las props, funciones y elementos
    // const formatedUserName = <span>@midudev</span>
    // const format = (userName) => `@${userName}`
    const otro = {isFollowing: false, userName: 'test'} //!Es una mala práctica

    return (
        //<React.Fragment>
        <>
            <section className='App'>
                <TwitterFollowCard isFollowing userName={'midudev'}>
                    Miguel Ángel Durán
                </TwitterFollowCard>

                <TwitterFollowCard isFollowing={false} userName={'nahumfgz'}>
                    Nahum Flores Gutierrez
                </TwitterFollowCard>
                
                <TwitterFollowCard isFollowing userName={'jose_sinfrenos'}>
                    Jose Carlos la Rosa
                </TwitterFollowCard>

                <TwitterFollowCard isFollowing>
                    Valor por Defecto
                </TwitterFollowCard>

                <TwitterFollowCard {...otro}>
                    Parametros Rest Operator
                </TwitterFollowCard>
            </section>
        </>
        //</React.Fragment>
    )
}