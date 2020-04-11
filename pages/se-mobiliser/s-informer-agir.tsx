import Head from 'next/head'
import Link from 'next/link'

import { attributes } from '../../content/s-engager.md'
import { HeaderMobiliser } from '../../components/Header'
import { Footer } from '../../components/Footer'

const Page = () => (
  <>
    <Head>
      <title>S'informer &amp; Agir • independants.co</title>
      {/* <meta title="description" content={attributes.description} /> */}
    </Head>

    <div id="s-informer-agir" className="h-100 se-mobiliser">
      <div className="container w-100 max-w-100vw min-h-100vh invert">
        <HeaderMobiliser active="s-informer-agir" />

        <main className="main pt-6 p-l-lg p-r-lg">
          <h1 className="slab h2 visually-hidden">S&rsquo;informer &amp; Agir</h1>
          <div className="page">
            <section className="mb-8">
              <h2 className="h2 slab uppercase">Toute l'actualité et les informations utiles d'indépendants.co</h2>
            </section>
            <section className="mb-8">
              <div className="mt-8">
                <div className="grid">
                  <div className="column mb-8 pr-8 col-4_lg-4_md-12">
                    <h3 className="column__title slab h2 mt-3 mb-0">COVID19</h3>

                    <div className="column__text my-5 text-container">
                      Informations, actions et contributions : tout savoir de la mobilisation d'indépendants.co durant
                      la crise sanitaire
                    </div>

                    <div className="column__cta text-container">
                      <Link href="/se-mobiliser/s-informer-agir/covid19">
                        <a className="btn">En savoir plus</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  </>
)

export default Page
