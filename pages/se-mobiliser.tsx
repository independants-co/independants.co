import { FunctionComponent } from 'react'
import { GetStaticProps } from 'next'

import Content from '../services/content'
import { Layout } from '../components/Layout'
import { News } from '../components/News'

const Page: FunctionComponent<{ news: any[] }> = ({ news }) => (
  <Layout id="se-mobiliser" title="Se mobiliser" description="" header="mobiliser">
    <section id="actualites">
      <h2 className="slab">Actualit&eacute;s</h2>

      <News news={news} />
    </section>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const news = await Content.getNews()

  return { props: { news } }
}

export default Page
