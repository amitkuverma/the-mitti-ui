import React from 'react'
import { Header } from './header'
import { Home } from '../components/home'
import { Footer } from './footer'

export const Layout = () => {
    return (
        <>
            <Header />
            <Home />
            <Footer />
        </>
    )
}
