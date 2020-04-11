import Head from 'next/head'
import Link from 'next/link'

import { HeaderMobiliser } from '../../../../components/Header'
import { Footer } from '../../../../components/Footer'

const Page = () => (
  <>
    <Head>
      <title>Informations pratiques • independants.co</title>
      {/* <meta title="description" content={attributes.description} /> */}
    </Head>

    <div id="informations-pratiques" className="h-100 se-mobiliser">
      <div className="container w-100 max-w-100vw min-h-100vh invert">
        <HeaderMobiliser active="s-informer-agir" />

        <main className="main pt-6 p-l-lg p-r-lg">
          <h1 className="slab h2 visually-hidden">Informations pratiques</h1>
          <Link href="/se-mobiliser/s-informer-agir/covid19">
            <a className="back mb-4">Retour</a>
          </Link>
          <div className="page"></div>
        </main>

        <Footer />
      </div>
    </div>
  </>
)

export default Page
