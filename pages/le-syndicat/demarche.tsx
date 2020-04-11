import Head from 'next/head'
import Link from 'next/link'
import { attributes, react as Content } from '../../content/demarche.md'

import { HeaderSyndicat } from '../../components/Header'
import { Footer } from '../../components/Footer'

const Page = () => (
  <>
    <Head>
      <title>{attributes.title} • independants.co</title>
      <meta title="description" content={attributes.description} />
    </Head>

    <div id="demarche" className="h-100 le-syndicat">
      <div className="container w-100 max-w-100vw min-h-100vh">
        <HeaderSyndicat active="demarche" />

        <main className="main flex pb-8 p-l-lg p-r-lg">
          <section className="flex flex-col">
            <h1 className="visually-hidden">La d&eacute;marche</h1>
            <div className="text-container">
              <h2>
                Que faudrait-il pour changer <br />
                la vie des indépendants en France ?
              </h2>
            </div>
            <div className="phases text-container grid">
              <article className="phase col-4_lg-12">
                <p className="phase__number primary uppercase slab">Phase 1</p>
                <h3 className="phase__title slab h2 mt-3 mb-0">Donnez votre avis</h3>
                <p className="phase__date primary hidden">janvier — juin</p>
                <div className="phase__text grey-dark">
                  <p>
                    Participez aux événements dans votre ville en vous
                    <Link href="/se-mobiliser/s-engager">
                      <a>engageant</a>
                    </Link>
                    pour répondre au questionnaire en ligne afin de choisir nos futurs axes de travail.
                    <br />
                    Depuis plusieurs mois, nous échangeons avec les collectifs qui vous rassemblent pour connaître vos
                    difficultés et les problèmes que vous rencontrez au quotidien. Nous allons multiplier les évènements
                    partout en France dans les prochains mois avec un double objectif :
                  </p>
                  <ul>
                    <li>
                      Rendre <strong>lisibles</strong> des problématiques sociales parfois perçues comme complexes
                    </li>
                    <li>
                      Rendre <strong>visibles</strong> les difficultés actuelles des indépendants
                    </li>
                  </ul>
                </div>
              </article>
              <article className="phase col-4_lg-12">
                <p className="phase__number primary uppercase slab">Phase 2</p>
                <h3 className="phase__title slab h2 mt-3 mb-0">Co-construisons ensemble nos revendications</h3>
                <p className="phase__date primary hidden">avril — octobre</p>
                <div className="phase__text grey-dark">
                  <p>
                    Des ateliers sont prévus dans les prochains mois à Lyon, Paris, Bordeaux, Nice et Nancy en
                    partenariat avec la plateforme
                    <a href="https://lesindes.co/" rel="noopener noreferrer" target="_blank">
                      Les Ind&eacute;s
                    </a>
                    . Vous êtes intéressés pour participer ou organiser à un atelier dans votre ville ?
                    <a href="mailto:contact@independants.co">&Eacute;crivez-nous !</a>
                  </p>
                  <p>
                    À partir de l’analyse des besoins, nous concevrons des propositions concrètes pour améliorer la
                    situation des indépendants avec certains de nos membres experts du volet social.
                  </p>
                </div>
              </article>
              <article className="phase col-4_lg-12">
                <p className="phase__number primary uppercase slab">Phase 3</p>
                <h3 className="phase__title slab h2 mt-3 mb-0">Revendiquons et agissons !</h3>
                <p className="phase__date primary hidden">octobre</p>
                <div className="phase__text grey-dark">
                  <p>
                    Les propositions retenues auront la légitimité pour être transmises aux décideurs politiques. Nous
                    mènerons également des actions collectives directes pour permettre des avancées concrètes des
                    conditions de travail et de vie. Cela vous parle ?
                    <a href="mailto:contact@independants.co">&Eacute;crivez-nous !</a>
                  </p>
                </div>
              </article>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  </>
)

export default Page
