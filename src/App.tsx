import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PathSection } from './components/PathSection';
import { ValuesSection } from './components/ValuesSection';
import { InchstonesSection } from './components/InchstonesSection';
import { MissionBand } from './components/MissionBand';
import { GiveBand } from './components/GiveBand';
import { Footer } from './components/Footer';
import { ProgramsPage } from './pages/ProgramsPage';
import './App.css';

function HomePage() {
  return (
    <div className="min-h-screen bg-paper text-ink transition-colors duration-200 flex flex-col font-sans selection:bg-gold selection:text-ink">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <PathSection />
        <ValuesSection />
        <InchstonesSection />
        <MissionBand />
        <GiveBand />
      </main>
      <Footer />
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programs" element={<ProgramsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
