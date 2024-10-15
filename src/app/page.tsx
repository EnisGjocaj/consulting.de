'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronRight, ChevronLeft } from 'lucide-react'

import Footer from '@/components/Footer'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import Header from '@/components/Header'


export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header isScrolled={isScrolled} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <NewsSection />
        <CallToAction />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}



function HeroSection() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 150])
  const y2 = useTransform(scrollY, [0, 500], [0, 100])
  const y3 = useTransform(scrollY, [0, 500], [0, 50])
  const y4 = useTransform(scrollY, [0, 500], [0, 200])

  const heroImages = [
    { src: '/placeholder.svg', alt: 'Precision Machinery', text: 'Präzision in Perfektion', y: y1 },
    { src: '/placeholder.svg', alt: 'Advanced Technology', text: 'Fortschrittliche Technologie', y: y2 },
    { src: '/placeholder.svg', alt: 'Quality Control', text: 'Kompromisslose Qualität', y: y3 },
    { src: '/placeholder.svg', alt: 'Customer Satisfaction', text: 'Kundenzufriedenheit im Fokus', y: y4 },
  ]

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 flex">
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            className="relative flex-1 overflow-hidden"
            style={{ y: image.y }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-110"
            />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-end p-4"
              initial={{ opacity: 0, y: 50 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-white text-xl font-bold text-center mb-4">{image.text}</h2>
              <Button variant="secondary" size="sm">
                Mehr erfahren
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        ))}
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Innovative Lösungen für die Maschinenbauindustrie
        </motion.h1>
        <motion.p
          className="text-xl mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Entdecken Sie die Zukunft der Präzisionstechnik
        </motion.p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button size="lg" variant="secondary">
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
          className="text-3xl font-bold text-center mb-12"
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
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-blue-600">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function NewsSection() {
  const news = [
    {
      title: 'Erweiterung des Maschinenparks',
      description: 'Universal CNC-Drehmaschine DMG CTX beta 2000',
      image: '/placeholder.svg',
    },
    {
      title: 'Hol- und Bringservice',
      description: 'Enorme Flexibilität nicht nur in der Produktion, sondern auch in der Logistik',
      image: '/placeholder.svg',
    },
    {
      title: 'Neue Internetpräsenz',
      description: 'Moderner Webauftritt für ein modernes Unternehmen',
      image: '/placeholder.svg',
    },
    {
      title: 'Innovatives Projekt',
      description: 'Zusammenarbeit mit führenden Forschungseinrichtungen',
      image: '/placeholder.svg',
    },
    {
      title: 'Auszeichnung erhalten',
      description: 'Für herausragende Leistungen in der Präzisionstechnik',
      image: '/placeholder.svg',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 3

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= news.length ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? news.length - itemsPerPage : prevIndex - 1
    )
  }

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  return (
    <section ref={ref} className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
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
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-all duration-300 ease-in-out"
              style={{
                x: `-${currentIndex * (100 / itemsPerPage)}%`,
              }}
            >
              {news.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="w-full md:w-1/3  flex-shrink-0 px-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <Image src={item.image} alt={item.title} width={400} height={200} className="w-full h-48 object-cover rounded-t-lg" />
                    <CardHeader>
                      <CardTitle className="text-blue-600">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
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
    <section ref={ref} className="py-16 bg-blue-600 text-white">
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
          className="text-xl mb-8"
          style={{
            opacity: scrollYProgress,
            y: useTransform(scrollYProgress, [0, 1], [50, 0])
          }}
        >
          Kontaktieren Sie uns noch heute für maßgeschneiderte Lösungen.
        </motion.p>
        <motion.div
          style={{
            scale: useTransform(scrollYProgress, [0, 1], [0.8, 1]),
            opacity: scrollYProgress
          }}
        >
          <Button size="lg" variant="secondary">
            Jetzt Kontakt aufnehmen
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

