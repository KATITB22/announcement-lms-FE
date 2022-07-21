import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './App';
import './index.css';
import Fonts from './fonts';

const theme = extendTheme({
    fonts: {
        heading: "'Magilio', sans-serif",
        subheading: "'Alegreya Semibold', sans-serif",
        body: "'Alegreya Sans Regular', sans-serif",
        caption: "'Alegreya Sans Thin', sans-serif",
    },
    colors: {
        base: {
            // TODO: fix colors
            'footer-text': '#511D05',
            'footer-bg': '#FFA06E',
            'header-text': '#D27C2F',
            'header-bg': '#FFEBB0',
            'header-selected-text': '#511D05',
        },
    },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <Fonts />
            <App />
        </ChakraProvider>
    </React.StrictMode>
);
