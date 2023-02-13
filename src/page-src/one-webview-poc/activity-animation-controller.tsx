import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
/* 
todo

- when history stack pushed, animate slide in from right to left
    - if current page's url is in history stack, don't animate 
    - if history stack's length higher than 1, hide native back button and bottom nav (O)
- when history stack popped, animate slide out to right
    - if device os is ios, don't exit animate

*/

enum AnimationState {
  Hide = 'hide',
  Show = 'show',
}

const variants = {
  [AnimationState.Hide]: {
    x: 100,
    opacity: 0,
  },
  [AnimationState.Show]: {
    x: 0,
    opacity: 1,
  },
}

interface Props {
  children: React.ReactNode
}

export const ActivityAnimationController = ({ children }: Props) => {
  const [enableAnimation, setEnableAnimation] = useState(false)

  useEffect(() => {
    const handlePush = () => {
      setEnableAnimation(true)
    }

    const handlePop = () => {
      setEnableAnimation(false)
    }

    window.addEventListener('push', handlePush)
    window.addEventListener('pop', handlePop)

    return () => {
      window.removeEventListener('push', handlePush)
      window.removeEventListener('pop', handlePop)
    }
  }, [])

  console.log('enableAnimation', enableAnimation)

  return enableAnimation ? (
    <main>{children}</main>
  ) : (
    <motion.main
      initial={AnimationState.Hide}
      animate={AnimationState.Show}
      variants={variants}
      transition={{ duration: 0.5, ease: 'easeInOut' }}>
      {children}
    </motion.main>
  )
}
