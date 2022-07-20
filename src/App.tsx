import { Suspense } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Routing } from './routing';

import Loading from './pages/Loading';

function App() {
    return (
        <ChakraProvider>
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
        </ChakraProvider>
    );
}

export default App;
