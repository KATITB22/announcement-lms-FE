import { Suspense, useRef, useEffect } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import ReactAudioPlayer from 'react-audio-player';

import BaseLayout from './layout/BaseLayout';
import { Routing } from './routing';
import Loading from './pages/Loading';
import BackgroundMusic from './assets/audio/audio.wav';

interface AppProps {
    video?: string;
}

function fixComponent<T>(component: T): T {
    return (component as any).default ?? component;
}
const ReactAudioPlayerComponent = fixComponent(ReactAudioPlayer);

const App: React.FC<AppProps> = () => {
    const inputRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        setTimeout(() => {
            if (inputRef.current !== null) {
                inputRef.current.click();
            }
        }, 1000);
    }, [inputRef]);

    const musicTrigger = () => {
        const music = document.getElementById(
            'backgroundMusic'
        ) as HTMLAudioElement;
        if (music != null) {
            music.play();
        }
    };

    return (
        <div ref={inputRef} onClick={musicTrigger} aria-hidden="true">
            <ChakraProvider>
                <BrowserRouter>
                    <BaseLayout>
                        <Routes>
                            {Routing.map((route) => {
                                const Component = route.component;
                                const props = route.props ? route.props : {};
                                return (
                                    <Route
                                        caseSensitive
                                        path={route.path}
                                        key={route.path}
                                        element={
                                            <Suspense fallback={<Loading />}>
                                                <Component {...props} />
                                            </Suspense>
                                        }
                                    />
                                );
                            })}
                        </Routes>
                    </BaseLayout>
                </BrowserRouter>
            </ChakraProvider>
            <ReactAudioPlayerComponent
                id="backgroundMusic"
                src={BackgroundMusic}
                autoPlay
                loop
            />
        </div>
    );
};

export default App;
