import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PathSection } from './components/PathSection';
import { ValuesSection } from './components/ValuesSection';
import { InchstonesSection } from './components/InchstonesSection';
import { MissionBand } from './components/MissionBand';
import { GiveBand } from './components/GiveBand';
import { Footer } from './components/Footer';
import './App.css';

export function App() {
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

export default App;
