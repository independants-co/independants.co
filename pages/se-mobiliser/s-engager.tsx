import Head from 'next/head'

import { attributes } from '../../content/s-engager.md'
import { HeaderMobiliser } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { FormSubscribe } from '../../components/FormSubscribe'

const Page = () => (
  <>
    <Head>
      <title>Se mobiliser • independants.co</title>
      <meta title="description" content={attributes.description} />
    </Head>

    <div id="s-engager" className="h-100 se-mobiliser">
      <div className="container invert w-100 max-w-100vw min-h-100vh">
        <HeaderMobiliser active="s-engager" />

        <main className="main flex pb-8 p-l-lg p-r-lg">
          <section className="flex flex-col">
            <h1 className="visually-hidden">S&rsquo;engager</h1>
            <div className="text-container"></div>
            <div className="mb-8">
              <h2 className="slab h1 mb-6">Rejoignez-nous</h2>

              <FormSubscribe />
            </div>

            <div className="actions mt-5 grid justify-between">
              {attributes.actions.map(({ title, description }, id) => (
                <article className="action mb-8 pr-8 col_md-12_lg-6" key={id}>
                  <h3 className="action__title slab h2 mt-3 mb-0">{title}</h3>
                  <div className="action__text text-container">
                    <p dangerouslySetInnerHTML={{ __html: description }} />
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
