import { useState } from 'react';
import { Page } from './types';
import { LanguageProvider } from './i18n';
import Navigation from './components/Navigation';
import PageToday from './pages/PageToday';
import PageTime from './pages/PageTime';
import PageInfo from './pages/PageInfo';
import PageSettings from './pages/PageSettings';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('today');

  return (
    <div className="min-h-screen bg-cream-50">
      <main>
        {currentPage === 'today' && <PageToday />}
        {currentPage === 'time' && <PageTime />}
        {currentPage === 'info' && <PageInfo />}
        {currentPage === 'settings' && <PageSettings />}
      </main>

      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
