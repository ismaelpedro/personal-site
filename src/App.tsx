import { useState } from 'react'
import { AppProvider } from '@/context/AppContext'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Philosophy } from '@/components/sections/Philosophy'
import { Experience } from '@/components/sections/Experience'
import { Skills } from '@/components/sections/Skills'
import { ContactModal } from '@/components/ui/ContactModal'

function AppContent() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-dots bg-noise">
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main>
        {/* Full-screen hero */}
        <Hero />

        {/* Content sections — narrower container */}
        <div className="max-w-2xl mx-auto px-6 pb-24 space-y-20">
          <About />
          <Philosophy />
          <Skills />
          <Experience />
          <Footer />
        </div>
      </main>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  )
}

export function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  )
}
