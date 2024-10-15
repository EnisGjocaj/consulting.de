import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Us
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                At VIJA, we are dedicated to precision manufacturing and innovative solutions. 
                Our passion for excellence drives us to deliver high-quality components and 
                exceptional service to diverse industries.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Our Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                Founded in 2012, VIJA has grown from a small workshop to a modern facility 
                with state-of-the-art CNC machines. Our expansion to Karlovac, Croatia in 2018 
                marked a significant milestone in our company's history.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Our Commitment</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row items-center">
            <Image
              src="/company-image.jpg"
              alt="VIJA company"
              width={400}
              height={300}
              className="rounded-lg mb-4 md:mb-0 md:mr-6"
            />
            <CardDescription className="text-lg">
              We are committed to precision, transparency, and reliability. Our ISO 9001:2015 
              certification underscores our dedication to quality. At VIJA, we continuously 
              strive to meet complex, individual requirements while maintaining the highest 
              standards of production.
            </CardDescription>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}