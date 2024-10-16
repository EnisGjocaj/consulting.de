'use client'

import { useState, useEffect } from 'react'
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
    image: '/images/cnc1.jpg',
    description: 'Hochpräzise CNC-Fräsbearbeitung für komplexe Aluminiumteile.'
  },
  {
    title: 'Automation',
    image: '/images/cnc12.jpg',
    description: 'Automatisierte Fertigungsprozesse für höhere Effizienz und Konsistenz.'
  },
  {
    title: '3D-Messtechnik',
    image: '/images/cnc3.jpg',
    description: 'Genaue Vermessung von Bauteilen mit modernster 3D-Messtechnik.'
  },
  {
    title: 'Oberflächenbehandlung',
    image: '/images/cnc11.jpg',
    description: 'Verschiedene Oberflächenbehandlungen für optimale Materialeigenschaften.'
  },
  {
    title: 'Laserschneiden',
    image: '/images/cnc9.jpg',
    description: 'Präzises Schneiden von Metallteilen mit modernster Lasertechnologie.'
  },
  {
    title: 'Schweißen',
    image: '/images/cnc10.jpg',
    description: 'Hochqualitative Schweißverfahren für verschiedene Materialien und Anwendungen.'
  }
]

export default function ServicesAndProcedures() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const [selectedProcedure, setSelectedProcedure] = useState<number | null>(null)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 mt-20">
      <div className="container mx-auto py-8 md:py-12 px-4">
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Unsere Dienstleistungen und Verfahren
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-center text-gray-600 mb-8 md:mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Entdecken Sie unsere umfassenden Lösungen für die Metallverarbeitung
        </motion.p>

        <Tabs defaultValue="services" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 md:mb-8">
            <TabsTrigger value="services" className="text-sm md:text-lg">Dienstleistungen</TabsTrigger>
            <TabsTrigger value="procedures" className="text-sm md:text-lg">Fertigungsmöglichkeiten</TabsTrigger>
          </TabsList>
          <TabsContent value="services">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: isSmallScreen ? 1 : 1.03 }}
                  onHoverStart={() => !isSmallScreen && setHoveredService(index)}
                  onHoverEnd={() => !isSmallScreen && setHoveredService(null)}
                >
                  <Card className="h-full overflow-hidden group">
                    <CardHeader className={`${service.color} text-white transition-all duration-300 ${isSmallScreen ? 'h-auto' : 'group-hover:h-1/3'}`}>
                      <CardTitle className="flex items-center text-xl md:text-2xl">
                        <span className="text-3xl md:text-4xl mr-3 md:mr-4">{service.icon}</span>
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 md:p-6">
                      <motion.p
                        className="text-gray-600 text-sm md:text-base"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isSmallScreen || hoveredService === index ? 1 : 0.7 }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.description}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isSmallScreen || hoveredService === index ? 1 : 0, y: isSmallScreen || hoveredService === index ? 0 : 20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Button variant="link" className="mt-2 md:mt-4 p-0 text-sm md:text-base">
                          Mehr erfahren <ChevronRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="procedures">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {procedures.map((procedure, index) => (
                <motion.div
                  key={procedure.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: isSmallScreen ? 1 : 1.03 }}
                  onClick={() => setSelectedProcedure(index)}
                >
                  <Card className="h-full cursor-pointer overflow-hidden">
                    <div className="relative h-40 md:h-48">
                      <Image
                        src={procedure.image}
                        alt={procedure.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <Search className="w-8 h-8 md:w-12 md:h-12 text-white" />
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg md:text-xl">{procedure.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm md:text-base">{procedure.description}</p>
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
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProcedure(null)}
          >
            <motion.div
              className="bg-white rounded-lg p-6 md:p-8 max-w-2xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{procedures[selectedProcedure].title}</h2>
              <div className="relative h-48 md:h-64 mb-4">
                <Image
                  src={procedures[selectedProcedure].image}
                  alt={procedures[selectedProcedure].title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <p className="text-gray-600 mb-4 text-sm md:text-base">{procedures[selectedProcedure].description}</p>
              <Button onClick={() => setSelectedProcedure(null)}>Schließen</Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}