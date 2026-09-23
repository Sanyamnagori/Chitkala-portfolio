import { Routes, Route } from 'react-router-dom'
import { FilterTags } from './components/FilterTags'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { ProjectGrid } from './components/ProjectGrid'
import { ProjectDetailPage } from './pages/ProjectDetailPage'
import { DivyaJyotPage } from './pages/DivyaJyotPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { TermsPage } from './pages/TermsPage'

function Home() {
  return (
    <div className="min-h-svh bg-white">
      <Navbar />
      <main>
        <FilterTags />
        <ProjectGrid />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/divya-jyot" element={<DivyaJyotPage />} />
      <Route path="/project/:slug" element={<ProjectDetailPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
    </Routes>
  )
}

export default App

