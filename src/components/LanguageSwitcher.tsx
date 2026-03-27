import { useLanguage } from '../i18n';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'cs' ? 'en' : 'cs')}
      className="px-2 py-1 text-xs font-medium rounded-lg bg-clay-200 text-themed-muted
               hover:bg-clay-300 transition-colors uppercase"
    >
      {language === 'cs' ? 'EN' : 'CZ'}
    </button>
  );
}
