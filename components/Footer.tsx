import { FunctionComponent } from 'react'
import Link from 'next/link'

export const Footer: FunctionComponent = () => (
  <footer id="footer" className="py-4 bg--black grey flex items-baseline justify-between">
    <p>
      <span className="slab">indépendants.co</span> <br />© {new Date().getFullYear()} · Tous droits réservés
    </p>
    <p className="pl-3">
      <a href="mailto:contact@independants.co">Contact</a>
      <br />
      <Link href="/mentions-legales">
        <a>Mentions légales</a>
      </Link>
    </p>
  </footer>
)
