import { attributes } from '../../content/s-engager.md'
import { Layout } from '../../components/Layout'
import { FormSubscribe } from '../../components/FormSubscribe'

const Page = () => (
  <Layout id="s-engager" title={attributes.title} description={attributes.description} header="mobiliser">
    <section className="flex flex-col">
      <h1 className="visually-hidden">S&rsquo;engager</h1>

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
  </Layout>
)

export default Page
