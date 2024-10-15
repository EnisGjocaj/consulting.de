import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './ui/button'
import { useEffect, useState } from 'react'
import { ArrowUpCircle } from 'lucide-react'

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

  export default ScrollToTopButton;