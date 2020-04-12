import { FunctionComponent } from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Head from 'next/head'

import Content from '../services/content'
import { FormSubscribe } from '../components/FormSubscribe'
import { News } from '../components/News'

const Page: FunctionComponent<{ news: any[] }> = ({ news }) => (
  <>
    <Head>
      <title>independants.co</title>
    </Head>

    <div id="home" className="h-100">
      <div className="container w-100 max-w-100vw h-100vh min-h-100vh">
        <main className="main h-100 flex">
          <section id="le-syndicat" className="h-100 bg--black">
            <header className="header le-syndicat flex flex-col">
              <nav className="nav w-100">
                <div className="w-100 flex justify-between">
                  <h2 className="slab" data-id="le-syndicat">
                    <Link href="/">
                      <a>Le syndicat</a>
                    </Link>
                  </h2>
                </div>

                <ul id="menu" role="menu" className="inline-flex flex-wrap no-list-style">
                  <li role="menuitem">
                    <Link href="/le-syndicat/objectifs">
                      <a>Objectifs</a>
                    </Link>
                  </li>
                  <li role="menuitem">
                    <Link href="/le-syndicat/tribune">
                      <a>Tribune</a>
                    </Link>
                  </li>
                  <li role="menuitem">
                    <Link href="/le-syndicat/demarche">
                      <a>La démarche</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </header>

            <div id="intro" className="my-0 pt-2 pb-8 bg--white">
              <h1 id="logo" className="slab h2">
                <span id="inde">indé</span>
                <span id="pendants">pendants</span>
                <span id="co" className="primary">
                  .co
                </span>
              </h1>
              <h2 className="grey-dark">
                Le néo-syndicat <br className="show-sm" />
                des travailleurs <span className="primary">indépendants</span>
              </h2>

              <FormSubscribe />
            </div>

            <div id="video" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src="https://www.youtube-nocookie.com/embed/sckm5y-pdlQ"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              ></iframe>
            </div>

            <footer id="footer" className="py-4 bg--black grey flex items-baseline justify-between">
              <p>
                <span className="slab">indépendants.co</span> <br />© 2020 · Tous droits réservés
              </p>
              <p className="pl-3">
                <a href="mailto:contact@independants.co">Contact</a>
                <br />
                <Link href="/mentions-legales">
                  <a>Mentions légales</a>
                </Link>
              </p>
            </footer>
          </section>

          <section id="se-mobiliser" className="invert">
            <header className="header se-mobiliser flex flex-col">
              <nav className="nav w-100">
                <div className="w-100 flex justify-between">
                  <h2 className="slab" data-id="se-mobiliser">
                    <Link href="/se-mobiliser">
                      <a>Se mobiliser</a>
                    </Link>
                  </h2>
                </div>

                <ul id="menu" role="menu" className="inline-flex flex-wrap no-list-style">
                  <li role="menuitem">
                    <Link href="/se-mobiliser/s-engager">
                      <a>S’engager</a>
                    </Link>
                  </li>
                  <li role="menuitem">
                    <Link href="/se-mobiliser/s-informer-agir">
                      <a>S’informer &amp; Agir</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </header>

            <section id="actualites" className="pt-2">
              <h2 className="slab">Actualités</h2>

              <News news={news} isHome />
            </section>
          </section>
        </main>
      </div>
    </div>
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const news = await Content.getNews()

  return { props: { news } }
}

export default Page
