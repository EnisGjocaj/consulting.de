'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import { ArrowUpCircle, ChevronRight, ChevronLeft, Menu, X } from 'lucide-react'

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'Unternehmen', href: '/unternehmen', subItems: ['Über uns', 'Team', 'Karriere'] },
  { name: 'Fertigung', href: '/fertigung', subItems: ['Prozesse', 'Qualität', 'Technologie'] },
  { name: 'Produkte', href: '/produkte', subItems: ['Werkzeuge', 'Maschinenteile', 'Baugruppen'] },
  { name: 'Dienstleistungen', href: '/dienstleistungen' },
  { name: 'Referenzen', href: '/referenzen' },
]

interface HeaderProps {
  isScrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
}

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

function Header({ isScrolled, mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-md py-2' : 'py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          STOCK
        </Link>
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.subItems ? (
                    <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
                  ) : (
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink className="text-sm font-medium">
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  )}
                  {item.subItems && (
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {item.subItems.map((subItem) => (
                          <li key={subItem}>
                            <NavigationMenuLink asChild>
                              <a
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                href="#"
                              >
                                {subItem}
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="hidden md:block">
          <Button variant="outline">KONTAKT</Button>
        </div>
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-white"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto py-8">
              <button
                className="absolute top-4 right-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
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

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Adresse</h3>
            <p>Edmund Stock GmbH</p>
            <p>Max-Eyth-Str. 3/1</p>
            <p>75443 Ötisheim</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <p>Telefon: +49 (0)7041 / 937 36-0</p>
            <p>Telefax: +49 (0)7041 / 937 36-50</p>
            <p>E-Mail: info@stock-werkzeuge.de</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Infos</h3>
            <ul className="space-y-2">
              <li><Link href="/downloads" className="hover:underline">Downloads</Link></li>
              <li><Link href="/impressum" className="hover:underline">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:underline">Datenschutz</Link></li>
              <li><Link href="/cookie-einstellungen" className="hover:underline">Cookie Einstellungen</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 Edmund Stock GmbH. Alle Rechte vorbehalten</p>
        </div>
      </div>
    </footer>
  )
}

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 right-8"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            size="icon"
            variant="secondary"
            onClick={scrollToTop}
            className="rounded-full shadow-lg"
          >
            <ArrowUpCircle className="h-6 w-6" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}