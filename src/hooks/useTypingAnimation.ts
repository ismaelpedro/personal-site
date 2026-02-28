import { useEffect, useRef, useState } from 'react'

const TYPING_SPEED = 80   // ms per character
const ERASING_SPEED = 40  // ms per character
const PAUSE_AFTER_TYPE = 2000  // ms pause when fully typed
const PAUSE_AFTER_ERASE = 400  // ms pause after erasing

export function useTypingAnimation(phrases: string[]) {
  const [displayed, setDisplayed] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const prevFirstPhrase = useRef(phrases[0])

  // Reset when language changes (phrases[0] changes)
  useEffect(() => {
    if (phrases[0] !== prevFirstPhrase.current) {
      prevFirstPhrase.current = phrases[0]
      setDisplayed('')
      setPhraseIndex(0)
      setIsTyping(true)
    }
  }, [phrases])

  useEffect(() => {
    if (phrases.length === 0) return

    const currentPhrase = phrases[phraseIndex]

    if (isTyping) {
      if (displayed.length < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setDisplayed(currentPhrase.slice(0, displayed.length + 1))
        }, TYPING_SPEED)
        return () => clearTimeout(timeout)
      } else {
        // Fully typed — pause then start erasing
        const timeout = setTimeout(() => setIsTyping(false), PAUSE_AFTER_TYPE)
        return () => clearTimeout(timeout)
      }
    } else {
      if (displayed.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayed((prev) => prev.slice(0, -1))
        }, ERASING_SPEED)
        return () => clearTimeout(timeout)
      } else {
        // Fully erased — move to next phrase
        const timeout = setTimeout(() => {
          setPhraseIndex((prev) => (prev + 1) % phrases.length)
          setIsTyping(true)
        }, PAUSE_AFTER_ERASE)
        return () => clearTimeout(timeout)
      }
    }
  }, [displayed, isTyping, phraseIndex, phrases])

  return displayed
}
