import Link from 'next/link'

import { attributes } from '../../../content/s-engager.md'
import { Layout } from '../../../components/Layout'

const Page = () => (
  <Layout id="s-informer-agir" title={attributes.title} description={attributes.description} header="mobiliser" blog>
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

              <div className="column__text my-5 text-container">Les dispositifs existants et la façon d'y accéder</div>

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
  </Layout>
)

export default Page
