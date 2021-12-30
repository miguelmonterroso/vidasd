import React from 'react'
import { Cards } from '../components/cards/Cards'
import { Header } from '../components/Header'

export const Home = () => {
    return (
        <div className='Home'>
            <Header/>
            <Cards/>
        </div>
    )
}
