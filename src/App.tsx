import { FilterTags } from './components/FilterTags'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { ProjectGrid } from './components/ProjectGrid'

function App() {
  return (
    <div className="min-h-svh bg-chitkala-red">
      <Navbar />
      <main>
        <FilterTags />
        <ProjectGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App
