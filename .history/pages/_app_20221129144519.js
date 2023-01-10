import Router from 'next/router';
import Head from 'next/head';
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react';
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
