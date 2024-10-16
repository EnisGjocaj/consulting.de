'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { MapPin, Mail, Phone, ChevronRight } from 'lucide-react'

const employees = [
  { 
    name: 'Rainer Stock', 
    position: 'CEO',
    frontImage: '/placeholder.svg?height=400&width=300', 
    backImage: '/placeholder.svg?height=400&width=300'
  },
  { 
    name: 'Sven Isenmann', 
    position: 'CTO',
    frontImage: '/placeholder.svg?height=400&width=300', 
    backImage: '/placeholder.svg?height=400&width=300'
  },
  { 
    name: 'Tim Kuhn', 
    position: 'COO',
    frontImage: '/placeholder.svg?height=400&width=300', 
    backImage: '/placeholder.svg?height=400&width=300'
  },
]

export default function ContactPage() {
  const [flipped, setFlipped] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-16">Kontaktieren Sie uns</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {employees.map((employee, index) => (
            <motion.div
              key={employee.name}
              className="perspective-1000 h-[400px] w-full"
              onHoverStart={() => setFlipped(index)}
              onHoverEnd={() => setFlipped(null)}
            >
              <motion.div
                className="w-full h-full relative rounded-xl shadow-2xl"
                animate={{ rotateY: flipped === index ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute w-full h-full backface-hidden overflow-hidden rounded-xl">
                  <img src={employee.frontImage} alt={employee.name} className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-6">
                    <h3 className="text-2xl font-semibold">{employee.name}</h3>
                    <p className="text-lg">{employee.position}</p>
                  </div>
                </div>
                <div 
                  className="absolute w-full h-full backface-hidden overflow-hidden rounded-xl"
                  style={{ transform: 'rotateY(180deg)' }}
                >
                  <img src={employee.backImage} alt={employee.name} className="w-full h-full object-cover opacity-50" />
                  <div className="absolute inset-0 bg-blue-600 bg-opacity-70 flex items-center justify-center">
                    <div className="text-white text-center p-6">
                      <h3 className="text-2xl font-semibold mb-2">{employee.name}</h3>
                      <p className="text-lg mb-4">{employee.position}</p>
                      <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                        Kontakt aufnehmen
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
              <h2 className="text-3xl font-semibold mb-8">Kontaktinformationen</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="mr-4 h-6 w-6" />
                  <p className="text-lg">Max-Eyth-Str. 3/1, 75443 Ötisheim</p>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-4 h-6 w-6" />
                  <p className="text-lg">info@stock-werkzeuge.de</p>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-4 h-6 w-6" />
                  <p className="text-lg">+49 (0)7041 / 937 36-0</p>
                </div>
              </div>
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Folgen Sie uns</h3>
                <div className="flex space-x-4">
                  {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                    <Button key={social} variant="outline" size="icon" className="rounded-full border-white text-white hover:bg-white hover:text-blue-600">
                      <span className="sr-only">{social}</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-12">
              <h2 className="text-3xl font-semibold mb-8 text-gray-900">Senden Sie uns eine Nachricht</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input placeholder="Vorname" required className="text-lg" />
                  <Input placeholder="Nachname" required className="text-lg" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input placeholder="Firma" className="text-lg" />
                  <Input placeholder="Position" className="text-lg" />
                </div>
                <Input placeholder="E-Mail" type="email" required className="text-lg" />
                <Input placeholder="Telefon" type="tel" className="text-lg" />
                <Textarea placeholder="Nachricht" required className="text-lg min-h-[150px]" />
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    Ich habe die Datenschutzerklärung zur Kenntnis genommen.
                  </label>
                </div>
                <Button type="submit" className="w-full text-lg py-6">Nachricht senden</Button>
              </form>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-semibold mb-8 text-gray-900">So finden Sie uns</h2>
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937604!2d2.2922926156740844!3d48.858370079287466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1621531907578!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}