import { FunctionComponent } from 'react'
import Link from 'next/link'

export const HeaderSyndicat: FunctionComponent<{ active?: string }> = ({ active }) => (
  <header className="header le-syndicat flex flex-col">
    <nav className="nav w-100">
      <div className="w-100 flex justify-between">
        <h2 className="slab" data-id="le-syndicat">
          <Link href="/">
            <a>Le syndicat</a>
          </Link>
        </h2>
        <h2 className="slab" data-id="se-mobiliser">
          <Link href="/se-mobiliser">
            <a>Se mobiliser</a>
          </Link>
        </h2>
      </div>

      <ul id="menu" role="menu" className="inline-flex flex-wrap no-list-style">
        <li role="menuitem">
          <Link href="/le-syndicat/objectifs">
            <a className={active === 'objectifs' ? 'active' : ''}>Objectifs</a>
          </Link>
        </li>
        <li role="menuitem">
          <Link href="/le-syndicat/tribune">
            <a className={active === 'tribune' ? 'active' : ''}>Tribune</a>
          </Link>
        </li>
        <li role="menuitem">
          <Link href="/le-syndicat/demarche">
            <a className={active === 'demarche' ? 'active' : ''}>La d&eacute;marche</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export const HeaderMobiliser: FunctionComponent<{ active?: string }> = ({ active }) => (
  <header className="header se-mobiliser flex flex-col">
    <nav className="nav w-100">
      <div className="w-100 flex justify-between">
        <h2 className="slab" data-id="se-mobiliser">
          <Link href="/se-mobiliser">
            <a>Se mobiliser</a>
          </Link>
        </h2>
        <h2 className="slab" data-id="le-syndicat">
          <Link href="/">
            <a>Le syndicat</a>
          </Link>
        </h2>
      </div>

      <ul id="menu" role="menu" className="inline-flex flex-wrap no-list-style">
        <li role="menuitem">
          <Link href="/se-mobiliser/s-engager">
            <a className={active === 's-engager' ? 'active' : ''}>S'engager</a>
          </Link>
        </li>
        <li role="menuitem">
          <Link href="/se-mobiliser/s-informer-agir">
            <a className={active === 's-informer-agir' ? 'active' : ''}>S'informer &amp; Agir</a>
          </Link>
        </li>
        <li role="menuitem">
          <Link href="/se-mobiliser/faq">
            <a className={active === 'faq' ? 'active' : ''}>FAQ</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)
