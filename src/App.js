import React from 'react'
import { Provider } from './state/Provider'
import { Header } from './components/header'
import { Filters } from './components/filters'
import { Results } from './components/results'
import { UserActions } from './components/userActions'
import { Footer } from './components/footer'

/**
 * all components are constructed inside of the Provider
 * to allow app state and functions that update state
 * to be passed down and available automatically
 * without having to manually pass in parameters and define props
 * @export
 * @return {*}
 */
export default function App () {
    return (
        <main>
            <Provider>
                <Header />
                <Filters />
                <Results />
                <UserActions />
                <Footer />
            </Provider>
        </main>
    )
}
