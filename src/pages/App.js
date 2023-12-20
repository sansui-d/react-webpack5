import React, { Suspense, useCallback, createContext } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import routers from '@routes/index';
import NotFound from '@components/NotFound';
import Loading from '@components/Loading';

export const AppContext = createContext(null);

function App() {

    const RouteList = useCallback((routers) => {
        return routers.map(item => {
            if (item.routes) {
                RouteList(item.routes)
            } else {
                <Route path={item.path} element={item.component} />
            }
        })
    }, [])

    return (
        <AppContext.Provider value="hello world">
            <div className="app">
                <Suspense fallback={<Loading />}>
                    <BrowserRouter>
                        <Routes>
                            {RouteList(routers)}
                            <Route key='404' component={NotFound} />
                        </Routes>
                    </BrowserRouter>
                </Suspense>
            </div>
        </AppContext.Provider>
    );
}

export default App;
