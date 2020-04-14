import { FunctionComponent, useState } from 'react'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export const News: FunctionComponent<NewsProps> = ({ news, isHome, collapsible, filter = 'all' }) => (
  <div className={`actualites grid items-stretch mb-6 ${isHome ? 'w-100' : ''}`}>
    {news
      .filter((article) => filter === 'all' || (filter !== 'all' && article.category.fields.title !== filter))
      .map((article, id) => (
        <Article key={id} article={article} isHome={isHome} collapsible={collapsible} />
      ))}
  </div>
)

const Article: FunctionComponent<ArticleProps> = ({ article, isHome, collapsible }) => {
  const [opened, setOpened] = useState(false)
  const headerClass = collapsible ? { cursor: 'pointer' } : {}

  return (
    <article className={`card ${isHome ? 'col-6_lg-12' : 'col-3_lg-6_md-6_sm-6_xs-12'} flex flex-col no-invert`}>
      <div className="card__body flex flex-grow px-5 py-4">
        <div className="flex flex-col">
          <div onClick={() => setOpened(!opened)} style={headerClass}>
            {!!article.published_at && (
              <p className="card__date primary mt-3 mb-3">
                {format(new Date(article.published_at), 'd MMMM yyyy', { locale: fr })}
              </p>
            )}
            <h3 className="card__title h3 mt-2 mb-0">{article.title}</h3>
          </div>

          {(!collapsible || (collapsible && opened)) && (
            <div
              className="card__intro grey-dark"
              dangerouslySetInnerHTML={{ __html: documentToHtmlString(article.content) }}
            />
          )}
        </div>
      </div>
    </article>
  )
}

interface NewsProps {
  news: Article[]
  isHome?: boolean
  collapsible?: boolean
  filter?: string
}

interface ArticleProps {
  article: Article
  isHome?: boolean
  collapsible?: boolean
}

interface Article {
  title: string
  content: any
  published_at?: string
  isHome?: boolean
  collapsibled?: boolean
  category?: any
}
