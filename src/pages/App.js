import React, { createContext } from 'react';
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom';
import store from '@store/index'
import routers from '@routes/index';

export const AppContext = createContext(null);

function App() {

    return (
        <div className="app">
            <Provider store={store}>
                <AppContext.Provider value="hello world">
                    <RouterProvider router={routers} />
                </AppContext.Provider>
            </Provider>
        </div>
    );
}

export default App;
