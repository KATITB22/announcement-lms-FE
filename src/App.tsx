import { Suspense } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import BaseLayout from './layout/BaseLayout';
import { Routing } from './routing';
import { Loading } from './pages/Loading';

function App() {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <BaseLayout>
                    <Routes>
                        {Routing.map((route) => {
                            const Component = route.component;
                            return (
                                <Route
                                    caseSensitive
                                    path={route.path}
                                    key={route.path}
                                    element={
                                        <Suspense fallback={<Loading />}>
                                            <Component />
                                        </Suspense>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </BaseLayout>
            </BrowserRouter>
        </ChakraProvider>
    );
}

export default App;
