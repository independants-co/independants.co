import Link from 'next/link'

import { Layout } from '../../../../components/Layout'

const Page = () => (
  <Layout id="s-informer-agir" title="Notre mobilisation" description="" header="mobiliser" blog>
    <h1 className="slab h2 visually-hidden">Notre mobilisation</h1>

    <Link href="/se-mobiliser/s-informer-agir/covid19">
      <a className="back mb-4">Retour</a>
    </Link>

    <div className="page"></div>
  </Layout>
)

export default Page
