"use client"

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Users, Cog, Target, Award } from 'lucide-react'

export default function AboutPage() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white" ref={ref}>
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center text-blue-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Consulting.DE
        </motion.h1>
        
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-xl text-gray-600">
            Pioneering precision manufacturing and innovative solutions since 2012. 
            At consulting.de, we're not just creating components; we're shaping the future of industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <AnimatedCard
            icon={<Target className="w-12 h-12 text-blue-500" />}
            title="Our Mission"
            description="To deliver unparalleled precision and innovation in manufacturing, empowering industries to achieve their highest potential."
            delay={0.3}
          />
          <AnimatedCard
            icon={<Users className="w-12 h-12 text-blue-500" />}
            title="Our Team"
            description="A diverse group of skilled professionals united by a passion for excellence and a commitment to pushing the boundaries of what's possible."
            delay={0.4}
          />
          <AnimatedCard
            icon={<Cog className="w-12 h-12 text-blue-500" />}
            title="Our Technology"
            description="State-of-the-art CNC machines and cutting-edge software ensure we stay at the forefront of manufacturing technology."
            delay={0.5}
          />
          <AnimatedCard
            icon={<Award className="w-12 h-12 text-blue-500" />}
            title="Our Commitment"
            description="ISO 9001:2015 certified, we're dedicated to maintaining the highest standards of quality and customer satisfaction."
            delay={0.6}
          />
        </div>

        <motion.div
          className="mb-16"
          style={{ opacity, scale }}
        >
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">Our Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <Timeline />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">Our Facility</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row items-center">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Consulting facility"
                width={400}
                height={300}
                className="rounded-lg mb-4 md:mb-0 md:mr-6"
              />
              <CardDescription className="text-lg text-gray-600">
                Our modern facility in Deutchland,is equipped with the latest technology 
                and staffed by skilled professionals. This expansion has allowed us to increase 
                our production capacity and serve a broader range of industries across Europe.
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-600">Ready to Experience Precision?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can bring innovation and excellence to your projects.
          </p>
          <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
            Contact Us
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}


interface AnimatedCardProps {
  icon: React.ReactNode;  // Assuming icon can be any React element
  title: string;
  description: string;
  delay: number;          // Delay is typically a number representing seconds
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ icon, title, description, delay }) => {
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      className="h-full"
    >
      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <div className="mb-4">{icon}</div>
          <CardTitle className="text-xl text-blue-600">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function Timeline() {
  const events = [
    { year: 2012, description: "STOCK founded as a small workshop" },
    { year: 2015, description: "Expanded operations and acquired first CNC machine" },
    { year: 2018, description: "Opened new facility in Karlovac, Croatia" },
    { year: 2020, description: "Achieved ISO 9001:2015 certification" },
    { year: 2023, description: "Launched innovative product line for aerospace industry" }
  ]

  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
      {events.map((event, index) => (
        <motion.div
          key={event.year}
          className="relative mb-8 flex items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="flex-1 text-right pr-4">
            <h3 className="text-lg font-bold text-blue-600">{event.year}</h3>
          </div>
          <div className="w-4 h-4 bg-blue-500 rounded-full z-10"></div>
          <div className="flex-1 pl-4">
            <p className="text-gray-600">{event.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}