"use client"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { 
  ExhibitionCalendar,
  CurrentExhibitions,
  UpcomingExhibitions 
} from '@/components';

export default function ExhibitionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sienna-500 to-sienna-500">
      <Navbar />
      <div className="pt-20 pb-10 px-4 max-w-7xl mx-auto flex flex-col gap-8">
        <h1 className="text-4xl md:text-5xl font-decorative text-white text-center mb-8">
          Our Exhibitions
        </h1>
        <CurrentExhibitions />
        <ExhibitionCalendar />
        <UpcomingExhibitions />
      </div>
      <Footer />
    </div>
  )
}