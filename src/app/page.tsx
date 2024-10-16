'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronRight, ChevronLeft } from 'lucide-react'

// import Footer from '@/components/Footer'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import Header from '@/components/Header'


function MobileHeroSection() {
  const cards = [
    { title: 'Präzision', image: '/placeholder.svg?height=200&width=300', description: 'Höchste Genauigkeit in allen Prozessen' },
    { title: 'Innovation', image: '/placeholder.svg?height=200&width=300', description: 'Fortschrittliche Technologien für zukunftsweisende Lösungen' },
    { title: 'Qualität', image: '/placeholder.svg?height=200&width=300', description: 'Kompromisslose Qualitätssicherung in jedem Schritt' },
    { title: 'Kundenorientierung', image: '/placeholder.svg?height=200&width=300', description: 'Maßgeschneiderte Lösungen für Ihre Anforderungen' },
  ]

  return (
    <section className="py-8 bg-blue-800 mt-14">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">Innovative Lösungen für die Maschinenbauindustrie</h1>
        <div className="grid grid-cols-1 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image src={card.image} alt={card.title} layout="fill" objectFit="cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-blue-600">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{card.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button size="lg" variant="default" className="bg-white text-blue-800 hover:bg-blue-100">
            Mehr erfahren
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}



export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false)


  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768)

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    handleResize() // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header isScrolled={isScrolled} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main className="flex-grow">
        {/* <HeroSection /> */}
        {isSmallScreen ? <MobileHeroSection /> : <HeroSection />}
        <FeaturesSection />
        <NewsSection />
        <CallToAction />
      </main>
      <ScrollToTopButton />
    </div>
  )
}


import { AnimatePresence } from 'framer-motion'

function HeroSection() {
  const [hoveredSection, setHoveredSection] = useState<number | null>(null)

  const sections = [
    { title: 'Präzision in Perfektion', description: 'Unsere Maschinen arbeiten mit höchster Genauigkeit.' },
    { title: 'Fortschrittliche Technologie', description: 'Wir setzen auf modernste Fertigungstechnologien.' },
    { title: 'Kompromisslose Qualität', description: 'Qualitätssicherung steht bei uns an erster Stelle.' },
    { title: 'Kundenzufriedenheit im Fokus', description: 'Ihre Anforderungen sind unser Antrieb.' },
  ]

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/meeting.jpg"
          alt="Machinery Hero"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
      </div>
      <div className="relative z-10 h-full grid grid-cols-4">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="relative border-r border-white last:border-r-0 overflow-hidden"
            onHoverStart={() => setHoveredSection(index)}
            onHoverEnd={() => setHoveredSection(null)}
          >
            <motion.div
              className="absolute inset-0 bg-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredSection === index ? 0.5 : 0 }}
              transition={{ duration: 0.3 }}
            />
            <AnimatePresence>
              {hoveredSection === index && (
                <motion.div
                  className="absolute inset-x-0 bottom-0 bg-blue-600 bg-opacity-90 flex flex-col items-center justify-center p-6 text-white"
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '100%' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  <h2 className="text-xl font-bold mb-2 text-center">{section.title}</h2>
                  <p className="text-sm text-center mb-4">{section.description}</p>
                  <Button variant="secondary" size="sm" className="bg-white text-blue-600 hover:bg-blue-50">
                    Mehr erfahren
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20 pointer-events-none">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center max-w-4xl px-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Innovative Lösungen für die Maschinenbauindustrie
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl lg:text-2xl mb-8 text-center max-w-2xl px-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Entdecken Sie die Zukunft der Präzisionstechnik mit unseren maßgeschneiderten Lösungen
        </motion.p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button size="lg" variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 pointer-events-auto">
            Mehr erfahren
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}


function FeaturesSection() {
  const features = [
    { title: 'Unternehmen', description: 'Erfahren Sie mehr über unsere Geschichte und Werte.' },
    { title: 'Fertigung', description: 'Entdecken Sie unsere hochmodernen Fertigungsprozesse.' },
    { title: 'Produkte', description: 'Erkunden Sie unser breites Spektrum an Präzisionsprodukten.' },
    { title: 'Referenzen', description: 'Sehen Sie, was unsere zufriedenen Kunden über uns sagen.' },
  ]

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-gray-800"
          style={{
            opacity: scrollYProgress,
            scale: useTransform(scrollYProgress, [0, 1], [0.8, 1])
          }}
        >
          Unsere Kernkompetenzen
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-gray-50 border-none">
                <CardHeader>
                  <CardTitle className="text-blue-600">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function NewsSection({ isSmallScreen }:any) {
  const news = [
    {
      title: 'Erweiterung des Maschinenparks',
      description: 'Universal CNC-Drehmaschine DMG CTX beta 2000',
      image: '/images/consultingImage1.jpg',
    },
    {
      title: 'Hol- und Bringservice',
      description: 'Enorme Flexibilität nicht nur in der Produktion, sondern auch in der Logistik',
      image: '/images/consultingImage2.jpg',
    },
    {
      title: 'Neue Internetpräsenz',
      description: 'Moderner Webauftritt für ein modernes Unternehmen',
      image: '/images/consultingImage3.jpg',
    },
    {
      title: 'Innovatives Projekt',
      description: 'Zusammenarbeit mit führenden Forschungseinrichtungen',
      image: '/images/consultingImage4.jpg',
    },
    {
      title: 'Auszeichnung erhalten',
      description: 'Für herausragende Leistungen in der Präzisionstechnik',
      image: '/images/consultingImage5.jpg',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = isSmallScreen ? 1 : 3

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= news.length ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? news.length - 1 : prevIndex - 1
    )
  }

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  return (
    <section ref={ref} className="py-12 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800"
          style={{
            opacity: scrollYProgress,
            scale: useTransform(scrollYProgress, [0, 1], [0.8, 1])
          }}
        >
          Was gibt es Neues?
        </motion.h2>
        <div className="relative">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-blue-600 hover:bg-blue-50"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-all duration-300 ease-in-out"
              style={{
                x: `-${currentIndex * 100}%`,
              }}
            >
              {news.map((item, index) => (
                <motion.div
                  key={item.title}
                  className={`w-full flex-shrink-0 px-4 ${isSmallScreen ? '' : 'md:w-1/3'}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-white border-none">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <Button variant="secondary" size="sm" className="bg-white text-blue-600 hover:bg-blue-50">
                          Mehr lesen
                        </Button>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-blue-600">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-blue-600 hover:bg-blue-50"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-6 hidden sm:flex justify-center">
          <Button variant="outline" size="sm" className="mr-2" onClick={prevSlide}>
            <ChevronLeft className="h-4 w-4 mr-1" /> Vorherige
          </Button>
          <Button variant="outline" size="sm" onClick={nextSlide}>
            Nächste <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}

function CallToAction() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  return (
    <section ref={ref} className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          style={{
            opacity: scrollYProgress,
            scale: useTransform(scrollYProgress, [0, 1], [0.8, 1])
          }}
        >
          Bereit für Präzision?
        </motion.h2>
        <motion.p
          className="text-xl mb-8 max-w-2xl mx-auto"
          style={{
            opacity: scrollYProgress,
            y: useTransform(scrollYProgress, [0, 1], [50, 0])
          }}
        >
          Kontaktieren Sie uns noch heute für maßgeschneiderte Lösungen, die Ihr Unternehmen auf das nächste Level bringen.
        </motion.p>
        <motion.div
          style={{
            scale: useTransform(scrollYProgress, [0, 1], [0.8, 1]),
            opacity: scrollYProgress
          }}
        >
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
            Jetzt Kontakt aufnehmen
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

