import Head from 'next/head'
import { attributes, html } from '../content/mentions-legales.md'

import { HeaderSyndicat } from '../components/Header'
import { Footer } from '../components/Footer'

const Page = () => (
  <>
    <Head>
      <title>{attributes.title} • independants.co</title>
      <meta title="description" content={attributes.description} />
    </Head>

    <div id="mentions-legales" className="h-100 le-syndicat">
      <div className="container w-100 max-w-100vw min-h-100vh">
        <HeaderSyndicat />

        <main className="main pb-8 p-l-lg p-r-lg">
          <section className="">
            <h1 className="slab h2 ">Mentions légales</h1>
            <div className="text-container text-max-w pt-2" dangerouslySetInnerHTML={{ __html: html }} />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  </>
)

export default Page
