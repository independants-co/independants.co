import Link from 'next/link'

import { Layout } from '../../../../components/Layout'

const Page = () => (
  <Layout id="s-informer-agir" title="Nos contributions" description="" header="mobiliser" blog>
    <h1 className="slab h2 visually-hidden">Contributions</h1>

    <Link href="/se-mobiliser/s-informer-agir/covid19">
      <a className="back mb-4">Retour</a>
    </Link>

    <div className="page">
      <section className="mb-8">
        <div className="mt-8">
          <div className="grid">
            <div className="column mb-8 pr-8 col-4_lg-4_md-12">
              <h3 className="column__title slab h2 mt-3 mb-0">
                Lettre d'un indépendant se préparant à la crise (de nerfs...)
              </h3>

              <div className="column__text my-5 text-container">
                Une contribution de Patrice Hauser (via son blog Médiapart)
              </div>

              <img
                className="column__image mb-4"
                src="https://www.independants.co/media/pages/se-mobiliser/s-informer-agir/covid19/contributions/4286306339-1585934255/2020-04-03-19.16.51.jpg"
              />

              <div className="column__cta text-container">
                <Link href="/se-mobiliser/s-informer-agir/covid19/contributions/lettre-d-un-independant-se-preparant-a-la-crise-de-nerfs">
                  <a className="btn">Lire</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default Page
