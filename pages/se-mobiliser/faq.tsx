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
            orci, in sodales felis mi vel sem.{' '}
          </p>
        </div>

        <div className="mt-2 grid justify-between">
          <div className="mb-8 pr-8 col_md-12_lg-3">
            <p className={`btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
              Tout afficher
            </p>

            {categories.map((category) => (
              <p
                className={`btn ${filter === category.title ? 'active' : ''}`}
                onClick={() => setFilter(category.title)}
                key={category.title}
              >
                {category.title}
              </p>
            ))}
          </div>

          <div className="mb-8 pr-8 col_md-12_lg-9">
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
