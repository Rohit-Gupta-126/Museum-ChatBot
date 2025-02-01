"use client"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import { LocationMap } from '@/components';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sienna-500 to-sienna-500">
      <Navbar />
      <div className="pt-20 pb-10 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-decorative text-white text-center mb-8">
          Contact Us
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          <ContactForm />
          <LocationMap />
        </div>
      </div>
      <Footer />
    </div>
  )
}