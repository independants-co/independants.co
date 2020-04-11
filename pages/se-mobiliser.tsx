import Head from 'next/head'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

import { attributes } from '../content/actualites.md'
import { HeaderMobiliser } from '../components/Header'
import { Footer } from '../components/Footer'

const Page = () => (
  <>
    <Head>
      <title>Se mobiliser • independants.co</title>
      <meta title="description" content={attributes.description} />
    </Head>

    <div id="se-mobiliser" className="h-100 se-mobiliser">
      <div className="container invert w-100 max-w-100vw min-h-100vh">
        <HeaderMobiliser />

        <main className="main flex pb-8 p-l-lg p-r-lg">
          <section id="actualites">
            <h2 className="slab">Actualit&eacute;s</h2>

            <div className="actualites grid items-stretch mb-6">
              {attributes.news.map(({ title, description, date }, id) => (
                <article className="card col-3_lg-6_md-6_sm-6_xs-12 flex flex-col no-invert">
                  <div className="card__body flex flex-grow px-5 py-4">
                    <div className="flex flex-col">
                      <div>
                        <p className="card__date primary mt-3 mb-3">
                          {format(new Date(date), 'd MMMM yyyy', { locale: fr })}
                        </p>
                        <h3 className="card__title h3 mt-2">{title}</h3>
                      </div>
                      <p className="card__intro grey-dark" dangerouslySetInnerHTML={{ __html: description }} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  </>
)

export default Page
