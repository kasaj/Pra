import { useLanguage } from '../i18n';

export default function PageInfo() {
  const { t } = useLanguage();

  return (
    <div className="page-container">
      <header className="mb-8">
        <h1 className="font-serif text-3xl text-clay-800">{t.info.title}</h1>
        <p className="text-clay-500 mt-2">{t.info.subtitle}</p>
      </header>

      <div className="space-y-6 text-clay-700 leading-relaxed">
        <section className="card">
          <p>{t.info.intro1}</p>
        </section>

        <section className="card">
          <p>{t.info.intro2}</p>
          <p className="font-serif text-lg text-clay-800 mt-4 text-center">
            {t.info.sequence}
          </p>
        </section>

        <section className="card">
          <p>{t.info.intro3}</p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-clay-800 mb-3">{t.info.bioTitle}</h2>
          <div className="card">
            <p>{t.info.bioText}</p>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-xl text-clay-800 mb-3">{t.info.psychTitle}</h2>
          <div className="card">
            <p>{t.info.psychText}</p>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-xl text-clay-800 mb-3">{t.info.philoTitle}</h2>
          <div className="card">
            <p>{t.info.philoText}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
