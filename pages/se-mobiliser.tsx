import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

import { attributes } from '../content/actualites.md'
import { Layout } from '../components/Layout'

const Page = () => (
  <Layout id="se-mobiliser" title={attributes.title} description={attributes.description} header="mobiliser">
    <section id="actualites">
      <h2 className="slab">Actualit&eacute;s</h2>

      <div className="actualites grid items-stretch mb-6">
        {attributes.news.map(({ title, description, date }, id) => (
          <article className="card col-3_lg-6_md-6_sm-6_xs-12 flex flex-col no-invert" key={`news-${id}`}>
            <div className="card__body flex flex-grow px-5 py-4">
              <div className="flex flex-col">
                <div>
                  <p className="card__date primary mt-3 mb-3">
                    {format(new Date(date), 'd MMMM yyyy', { locale: fr })}
                  </p>
                  <h3 className="card__title h3 mt-2">{title}</h3>
                </div>
                <p className="card__intro grey-dark" dangerouslySetInnerHTML={{ __html: description }} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  </Layout>
)

export default Page
