import React from 'react'
import { AppProps } from 'next/app'
import { FunctionComponent } from 'react'

import '../style/main.scss'

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />

export default App
