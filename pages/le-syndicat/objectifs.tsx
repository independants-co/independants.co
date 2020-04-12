import { attributes, html } from '../../content/objectifs.md'

import { Layout } from '../../components/Layout'

const Page = () => (
  <Layout id="objectifs" title={attributes.title} description={attributes.description} header="syndicat">
    <section className="flex flex-col">
      <h1 className="visually-hidden">{attributes.title}</h1>

      <div className="text-container text-max-w pt-2" dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  </Layout>
)

export default Page
