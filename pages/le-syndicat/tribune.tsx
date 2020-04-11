import Head from 'next/head'
import Link from 'next/link'
import { attributes, html } from '../../content/tribune.md'

import { HeaderSyndicat } from '../../components/Header'
import { Footer } from '../../components/Footer'

const Page = () => (
  <>
    <Head>
      <title>{attributes.title} • independants.co</title>
      <meta title="description" content={attributes.description} />
    </Head>

    <div id="tribune" className="h-100 le-syndicat">
      <div className="container w-100 max-w-100vw min-h-100vh">
        <HeaderSyndicat active="tribune" />

        <main className="main pb-8 p-l-lg p-r-lg tribune">
          <section>
            <h1 className="visually-hidden">Tribune</h1>

            <SignButton />
            <div className="text-container text-max-w pt-2" dangerouslySetInnerHTML={{ __html: html }} />
            <SignButton />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  </>
)

export default Page

const SignButton = () => (
  <div className="my-4">
    <a
      className="btn btn--primary"
      href="https://www.change.org/p/ind%C3%A9pendants-soutenez-le-n%C3%A9o-syndicat-des-ind%C3%A9pendants"
      target="_blank"
    >
      Signez la tribune
    </a>
  </div>
)
