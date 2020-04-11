import Head from 'next/head'
import Link from 'next/link'

import { attributes } from '../../content/s-engager.md'
import { HeaderMobiliser } from '../../../components/Header'
import { Footer } from '../../../components/Footer'

const Page = () => (
  <>
    <Head>
      <title>COVID19 • independants.co</title>
      {/* <meta title="description" content={attributes.description} /> */}
    </Head>

    <div id="covid19" className="h-100 se-mobiliser">
      <div className="container w-100 max-w-100vw min-h-100vh invert">
        <HeaderMobiliser active="s-informer-agir" />

        <main className="main pt-6 p-l-lg p-r-lg">
          <h1 className="slab h2 visually-hidden">COVID19</h1>
          <Link href="/se-mobiliser/s-informer-agir">
            <a className="back mb-4">Retour</a>
          </Link>
          <div className="page">
            <section className="mb-8">
              <h2 className="h2 slab uppercase">COVID19 : toutes les informations dont vous avez besoin</h2>
            </section>
            <section className="mb-8">
              <div className="mt-8">
                <div className="grid">
                  <div className="column mb-8 pr-8 col-4_lg-4_md-12">
                    <h3 className="column__title slab h2 mt-3 mb-0">Informations pratiques</h3>

                    <div className="column__text my-5 text-container">
                      Les dispositifs existants et la façon d'y accéder
                    </div>

                    <div className="column__cta text-container">
                      <Link href="/se-mobiliser/s-informer-agir/covid19/informations-pratiques">
                        <a className="btn">En savoir plus</a>
                      </Link>
                    </div>
                  </div>
                  <div className="column mb-8 pr-8 col-4_lg-4_md-12">
                    <h3 className="column__title slab h2 mt-3 mb-0">Notre mobilisation</h3>

                    <div className="column__text my-5 text-container">
                      Les actions menées par indépendants.co pendant la crise
                    </div>

                    <div className="column__cta text-container">
                      <Link href="/se-mobiliser/s-informer-agir/covid19/notre-mobilisation">
                        <a className="btn">En savoir plus</a>
                      </Link>
                    </div>
                  </div>
                  <div className="column mb-8 pr-8 col-4_lg-4_md-12">
                    <h3 className="column__title slab h2 mt-3 mb-0">Nos contributions</h3>

                    <div className="column__text my-5 text-container">
                      Opinions et points de vue, par indépendants.co et d'autres
                    </div>

                    <div className="column__cta text-container">
                      <Link href="/se-mobiliser/s-informer-agir/covid19/contributions">
                        <a className="btn">En savoir plus</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="mb-8"></section>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  </>
)

export default Page
