import React from "react";
import { Provider } from './state/Provider';
import { Filters } from './components/filters/index';
import { Results } from './components/results/index';
import { UserActions } from './components/userActions/index';

/**
 * all components are constructed inside of the Provider
 * to allow app state and functions that update state
 * to be passed down and available automatically
 * without having to manually pass in parameters and define props
 * @export
 * @return {*}
 */
export default function App() {
  return (
    <main>
        <Provider>
            <Filters />
            <Results />
            <UserActions />
        </Provider>
    </main>
  );
}
