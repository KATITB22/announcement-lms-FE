import { Suspense } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ChakraProvider } from '@chakra-ui/react';
import { Routing } from './routing';

import Loading from './pages/Loading';

function App() {
    return (
        <ChakraProvider>
            <Suspense fallback={<Loading />}>
                <BrowserRouter>
                    <AnimatePresence exitBeforeEnter>
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
                    </AnimatePresence>
                </BrowserRouter>
            </Suspense>
        </ChakraProvider>
    );
}

export default App;
