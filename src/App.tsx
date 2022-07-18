import { Suspense } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Loading from './pages/Loading';
import { Routing } from './routing';

function App() {
    return (
        <Suspense fallback={<Loading />}>
            <BrowserRouter>
                <Routes>
                    {Routing.map((route) => {
                        const Component = route.component;
                        return (
                            <Route
                                caseSensitive
                                path={route.path}
                                key={route.path}
                                element={<Component />}
                            />
                        );
                    })}
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;
