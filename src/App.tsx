import { Routes, Route } from 'react-router-dom'
import { FilterTags } from './components/FilterTags'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { ProjectGrid } from './components/ProjectGrid'
import { ProjectDetailPage } from './pages/ProjectDetailPage'

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
      <Route path="/project/:slug" element={<ProjectDetailPage />} />
    </Routes>
  )
}

export default App

