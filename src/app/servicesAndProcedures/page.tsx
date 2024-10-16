'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { ChevronRight, Search } from 'lucide-react'

const services = [
  {
    title: 'Rohmateriallager',
    description: 'Breites Sortiment an Aluminiumplatten für kurze Lieferzeiten.',
    icon: '🏭',
    color: 'bg-blue-500'
  },
  {
    title: 'Laser',
    description: 'Laserbeschriftungen bis zu 2.000 mm Länge.',
    icon: '🔬',
    color: 'bg-green-500'
  },
  {
    title: 'Aluminiumlegierungen',
    description: 'Vielfältige Legierungen und Formate verfügbar.',
    icon: '🔧',
    color: 'bg-yellow-500'
  },
  {
    title: 'Messen',
    description: 'Hochmoderne Messmaschinen für präzise Qualitätskontrolle.',
    icon: '📏',
    color: 'bg-red-500'
  },
  {
    title: 'Glasperlenstrahlen',
    description: 'Strahlanlage für Werkstücke bis 1.500 x 3.000 mm.',
    icon: '💎',
    color: 'bg-purple-500'
  },
  {
    title: 'Schleiftechnik',
    description: 'Plattenschleifanlage für Aluminiumplatten bis 1.500 x 3.000 mm.',
    icon: '🔨',
    color: 'bg-indigo-500'
  }
]

const procedures = [
  {
    title: 'CNC Fräsen',
    image: '/placeholder.svg',
    description: 'Hochpräzise CNC-Fräsbearbeitung für komplexe Aluminiumteile.'
  },
  {
    title: 'Automation',
    image: '/placeholder.svg',
    description: 'Automatisierte Fertigungsprozesse für höhere Effizienz und Konsistenz.'
  },
  {
    title: '3D-Messtechnik',
    image: '/placeholder.svg',
    description: 'Genaue Vermessung von Bauteilen mit modernster 3D-Messtechnik.'
  },
  {
    title: 'Oberflächenbehandlung',
    image: '/placeholder.svg',
    description: 'Verschiedene Oberflächenbehandlungen für optimale Materialeigenschaften.'
  },
  {
    title: 'Laserschneiden',
    image: '/placeholder.svg',
    description: 'Präzises Schneiden von Metallteilen mit modernster Lasertechnologie.'
  },
  {
    title: 'Schweißen',
    image: '/placeholder.svg',
    description: 'Hochqualitative Schweißverfahren für verschiedene Materialien und Anwendungen.'
  }
]

export default function ServicesAndProcedures() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const [selectedProcedure, setSelectedProcedure] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 mt-20">
      <div className="container mx-auto py-12 px-4">
        <motion.h1
          className="text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Unsere Dienstleistungen und Verfahren
        </motion.h1>
        <motion.p
          className="text-xl text-center text-gray-600 mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Entdecken Sie unsere umfassenden Lösungen für die Metallverarbeitung
        </motion.p>

        <Tabs defaultValue="services" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="services" className="text-lg">Dienstleistungen</TabsTrigger>
            <TabsTrigger value="procedures" className="text-lg">Fertigungsmöglichkeiten</TabsTrigger>
          </TabsList>
          <TabsContent value="services">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  onHoverStart={() => setHoveredService(index)}
                  onHoverEnd={() => setHoveredService(null)}
                >
                  <Card className="h-full overflow-hidden group">
                    <CardHeader className={`${service.color} text-white transition-all duration-300 group-hover:h-1/3`}>
                      <CardTitle className="flex items-center text-2xl">
                        <span className="text-4xl mr-4">{service.icon}</span>
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <motion.p
                        className="text-gray-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredService === index ? 1 : 0.7 }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.description}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: hoveredService === index ? 1 : 0, y: hoveredService === index ? 0 : 20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Button variant="link" className="mt-4 p-0">
                          Mehr erfahren <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="procedures">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {procedures.map((procedure, index) => (
                <motion.div
                  key={procedure.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setSelectedProcedure(index)}
                >
                  <Card className="h-full cursor-pointer overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={procedure.image}
                        alt={procedure.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <Search className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>{procedure.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{procedure.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <AnimatePresence>
        {selectedProcedure !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProcedure(null)}
          >
            <motion.div
              className="bg-white rounded-lg p-8 max-w-2xl w-full m-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-3xl font-bold mb-4">{procedures[selectedProcedure].title}</h2>
              <div className="relative h-64 mb-4">
                <Image
                  src={procedures[selectedProcedure].image}
                  alt={procedures[selectedProcedure].title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <p className="text-gray-600 mb-4">{procedures[selectedProcedure].description}</p>
              <Button onClick={() => setSelectedProcedure(null)}>Schließen</Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}