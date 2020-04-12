import { attributes, html } from '../../content/tribune.md'

import { Layout } from '../../components/Layout'

const Page = () => (
  <Layout id="tribune" title={attributes.title} description={attributes.description} header="syndicat">
    <section className="flex flex-col">
      <h1 className="visually-hidden">{attributes.title}</h1>

      <SignButton />
      <div className="text-container text-max-w pt-2" dangerouslySetInnerHTML={{ __html: html }} />
      <SignButton />
    </section>
  </Layout>
)

export default Page

const SignButton = () => (
  <div className="my-4">
    <a
      className="btn btn--primary"
      href="https://www.change.org/p/ind%C3%A9pendants-soutenez-le-n%C3%A9o-syndicat-des-ind%C3%A9pendants"
      target="_blank"
    >
      Signez la tribune
    </a>
  </div>
)
