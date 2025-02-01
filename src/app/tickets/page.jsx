import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TicketingSystem from '@/components/TicketingSystem'

export default function TicketsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sienna-500 to-sienna-500">
      <Navbar />
      <div className="pt-20 pb-10 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-decorative text-white text-center mb-8">
          Book Your Tickets
        </h1>
        <TicketingSystem />
      </div>
      <Footer />
    </div>
  )
}