import { FunctionComponent } from 'react'

import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export const News: FunctionComponent<{ news: any[]; isHome?: boolean }> = ({ news, isHome }) => (
  <div className={`actualites grid items-stretch mb-6 ${isHome ? 'w-100' : ''}`}>
    {news.map(({ title, content, published_at }, id) => (
      <article
        className={`card ${isHome ? 'col-6_lg-12' : 'col-3_lg-6_md-6_sm-6_xs-12'} flex flex-col no-invert`}
        key={`news-${id}`}
      >
        <div className="card__body flex flex-grow px-5 py-4">
          <div className="flex flex-col">
            <div>
              <p className="card__date primary mt-3 mb-3">
                {format(new Date(published_at), 'd MMMM yyyy', { locale: fr })}
              </p>
              <h3 className="card__title h3 mt-2">{title}</h3>
            </div>
            <div
              className="card__intro grey-dark"
              dangerouslySetInnerHTML={{ __html: documentToHtmlString(content) }}
            />
          </div>
        </div>
      </article>
    ))}
  </div>
)
