import * as React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Layout from '../components/layout/Layout';
import { AppProps } from 'next/app';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
