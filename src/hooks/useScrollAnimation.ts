import { useAnimation } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'

export const useScrollAnimation = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  useEffect(() => {
    if (inView) {
      controls.start('animate')
    }
  }, [controls, inView])

  return { ref, controls }
}