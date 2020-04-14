import * as contentful from 'contentful'

export default class Content {
  private static client: contentful.ContentfulClientApi

  public static getClient(): contentful.ContentfulClientApi {
    if (!Content.client) {
      Content.client = contentful.createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      })
    }

    return Content.client
  }

  public static async getNews() {
    const client = Content.getClient()
    const res = await client.getEntries({ content_type: 'news', order: '-fields.published_at' })

    return res.items.map((data) => data.fields)
  }

  public static async getFaqCategories() {
    const client = Content.getClient()
    const res = await client.getEntries({ content_type: 'faq_categories' })

    return res.items.map((data) => data.fields)
  }

  public static async getFaqArticles() {
    const client = Content.getClient()
    const res = await client.getEntries({ content_type: 'faq_article' })

    return res.items.map((data) => data.fields)
  }
}
