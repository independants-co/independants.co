import { FunctionComponent } from 'react'
import Head from 'next/head'

import { HeaderSyndicat, HeaderMobiliser } from './Header'
import { Footer } from './Footer'

export const Layout: FunctionComponent<LayoutProps> = ({ id, title, description, header, children, blog }) => (
  <>
    <Head>
      <title>{title} • independants.co</title>
      <meta title="description" content={description} />
    </Head>

    <div id={id} className={`h-100 ${header === 'mobiliser' ? 'se-mobiliser' : ''}`}>
      <div className={`container w-100 max-w-100vw min-h-100vh ${header === 'mobiliser' ? 'invert' : ''}`}>
        {header === 'syndicat' ? <HeaderSyndicat active={id} /> : <HeaderMobiliser active={id} />}

        <main className={`main ${blog ? 'pt-6' : 'flex pb-8'} p-l-lg p-r-lg`}>{children}</main>

        <Footer />
      </div>
    </div>
  </>
)

export interface LayoutProps {
  id: string
  title: string
  description: string
  header: 'syndicat' | 'mobiliser'
  blog?: boolean
}
