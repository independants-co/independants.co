import { FunctionComponent } from 'react'

export const FormSubscribe: FunctionComponent<{ active?: string }> = ({ active }) => (
  <form action="https://paris.us4.list-manage.com/subscribe/post" method="post" className="">
    <input type="hidden" name="u" value="08e0e028b59ae62a4395e0683" />
    <input type="hidden" name="id" value="37ae40537a" />

    <div className="flex flex-wrap">
      <div className="flex flex-shrink flex-wrap">
        <label className="visually-hidden">Email</label>
        <input type="email" name="EMAIL" id="EMAIL" placeholder="Entrez votre email…" className="flex flex-shrink" />
      </div>

      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
        <input type="text" name="b_08e0e028b59ae62a4395e0683_37ae40537a" />
      </div>
      <input type="submit" className="btn btn--primary" name="submit" value="Rejoignez-nous" />
    </div>

    <div className="text-max-w">
      <p className="grey">
        La saisie de votre adresse email implique que vous recevrez des emails d’information réguliers de notre part.
        Vous pourrez vous désabonner à tout moment.
        <a className="primary" href="https://mailchimp.com/legal/terms/">
          Conditions d’utilisation
        </a>
      </p>
    </div>
  </form>
)
