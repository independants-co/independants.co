import { useState } from 'react'
import { GetStaticProps } from 'next'

import Content from '../../services/content'
import { attributes } from '../../content/s-engager.md'
import { Layout } from '../../components/Layout'
import { News } from '../../components/News'

const Page = ({ categories, articles }) => {
  const [filter, setFilter] = useState('all')

  return (
    <Layout id="faq" title={attributes.title} description={attributes.description} header="mobiliser">
      <section className="page">
        <div className="text-container mb-6">
          <h1 className="slab h1 mb-6">Base de connaissances</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis urna vitae sem bibendum
            pellentesque. Phasellus eget libero dapibus, dictum ligula et, gravida orci. Fusce vel finibus ante. Cras
            sollicitudin cursus lorem in suscipit. Vestibulum fringilla, nisi ut feugiat molestie, libero libero cursus
            orci, in sodales felis mi vel sem.
          </p>
        </div>

        <div className="mt-2 grid">
          <div className="mb-2 pr-8 col-3_md-12">
            <ul className="pl-0 no-list-style">
              <li onClick={() => setFilter('all')}>
                <div className={`btn ${filter === 'all' ? 'active' : ''}`}>Tout afficher</div>
              </li>

              {categories.map((category) => (
                <li onClick={() => setFilter(category.title)} key={category.title}>
                  <div className={`btn ${filter === category.title ? 'active' : ''}`}>{category.title}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8 pr-8 col-9_md-12">
            <News news={articles} filter={filter} isHome collapsible />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const categories = await Content.getFaqCategories()
  const articles = await Content.getFaqArticles()

  return { props: { categories, articles } }
}

export default Page
