'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

import Typewriter from '@/components/TypeWriter'

const services = [
  {
    title: 'Reparatur / Wartung',
    description: 'Unsere Fachleute kümmern sich darum, dass Ihre Werkzeuge und Baugruppen gepflegt und voll einsatzbereit sind. Zu unserem professionellen Reparaturservice gehören Montagen und Wartungsarbeiten.',
    images: ['/images/cnc3.jpg']
  },
  {
    title: 'Logistik',
    description: 'Stock ist ein Partner, auf den Sie sich verlassen können – auch bei der Projektlogistik. Zum Beispiel kümmern wir uns um die Materialbeschaffung: Unsere Kunden profitieren vom großen Stock-Rohmateriallager, das uns extrem reaktionsschnell macht.',
    images: ['/images/cnc7.jpg']
  },
  {
    title: 'Qualitätskontrolle',
    description: 'Wir führen strenge Qualitätskontrollen durch, um sicherzustellen, dass alle unsere Produkte und Dienstleistungen den höchsten Standards entsprechen. Unser engagiertes Team von Experten verwendet modernste Technologien und Verfahren, um Präzision und Zuverlässigkeit zu gewährleisten.',
    images: ['/images/cnc8.jpg']
  }
]

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % service.images.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [service.images.length])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-64 md:h-full">
            {service.images.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: i === currentImage ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image src={src} alt={service.title} layout="fill" objectFit="cover" />
              </motion.div>
            ))}
          </div>
          <CardContent className="p-6 flex flex-col justify-between">
            <div>
              <motion.h3
                className="text-2xl font-bold mb-4 text-blue-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {service.title}
              </motion.h3>
              <motion.p
                className="text-gray-600 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {service.description}
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button variant="outline" className="group">
                Mehr erfahren
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  )
}

export default function ServicesPage() {
  const headerWords = ['Innovativ', 'Zuverlässig', 'Präzise', 'Kundenorientiert']
  const scrollRef = useRef(null)
  const scrollInView = useInView(scrollRef, { once: true, amount: 0.2 })

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
        >
          <source src="/videos/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 text-center text-white">
            <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                {/* Use the custom Typewriter component */}
                <Typewriter words={headerWords} typeSpeed={100} deleteSpeed={50} delaySpeed={1000} />
            </motion.div>
          {/* <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TypeWriterEffect
              textStyle={{ fontFamily: 'Red Hat Display', fontSize: '3rem', fontWeight: 'bold' }}
              startDelay={100}
              cursorColor="white"
              multiText={headerWords}
              multiTextDelay={1000}
              typeSpeed={100}
            />
          </motion.div> */}
          <motion.h1
            className="text-5xl font-bold mb-4 mt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Dienstleistungen
          </motion.h1>
          <motion.p
            className="text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Wir bieten ein durchdachtes, speziell auf die Wünsche unserer Kunden abgestimmtes Dienstleistungspaket
          </motion.p>
        </div>
      </div>

      <div ref={scrollRef} className="container mx-auto py-16 px-4">
        <motion.div
          className="space-y-16"
          initial={{ opacity: 0, y: 50 }}
          animate={scrollInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, staggerChildren: 0.2 }}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}