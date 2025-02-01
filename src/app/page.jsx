import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import ChatbotWidget from '@/components/ChatbotWidget'
import ExhibitionPreview from '@/components/ExhibitionPreview'
import VisitPlanning from '@/components/VisitPlanning'
import Footer from '@/components/Footer'
import { MuseumSection } from '@/components/MuseumSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sienna-500 to-sienna-500">
      <Navbar />
      <Hero />
      <Features />
      <MuseumSection />
      <ExhibitionPreview />
      <VisitPlanning />
      <ChatbotWidget />
      <Footer />
    </main>
  )
}
