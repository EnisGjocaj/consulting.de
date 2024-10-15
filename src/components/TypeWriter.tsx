import { useState, useEffect } from 'react'

interface TypewriterProps {
  words: string[]
  typeSpeed?: number
  deleteSpeed?: number
  delaySpeed?: number
}

export default function Typewriter({
  words,
  typeSpeed = 100,
  deleteSpeed = 50,
  delaySpeed = 1000
}: TypewriterProps): JSX.Element {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(typeSpeed)

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex]
      
      // Typing
      if (!isDeleting) {
        setDisplayedText(currentWord.slice(0, displayedText.length + 1))
        setTypingSpeed(typeSpeed)
        
        if (displayedText === currentWord) {
          setTimeout(() => setIsDeleting(true), delaySpeed)
        }
      } 
      // Deleting
      else {
        setDisplayedText(currentWord.slice(0, displayedText.length - 1))
        setTypingSpeed(deleteSpeed)

        if (displayedText === '') {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }

    const typingTimeout = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(typingTimeout)
  }, [displayedText, isDeleting, words, currentWordIndex, typeSpeed, deleteSpeed, delaySpeed, typingSpeed])

  return <span>{displayedText}|</span>
}
