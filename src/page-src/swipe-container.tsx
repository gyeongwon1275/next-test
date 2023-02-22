import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

const swipeConfidenceThreshold = 100

interface Props {
  children: React.ReactNode
}
const SwipeContainer = (props: Props) => {
  const x = useMotionValue(0)
  const opacity = useTransform(x, [-5000, 0, 5000], [0, 1, 0])

  const handleSwipe = (event: any, info: any) => {
    console.log('handleSwipe', event, info)
    const { offset } = info
    const swipeDirection = offset.x > 0 ? 'right' : 'left'
    const swipeConfidence = Math.abs(offset.x) > swipeConfidenceThreshold
    console.log('swipeDirection', swipeDirection)
    console.log('swipeConfidence', swipeConfidence)

    if (swipeConfidence && swipeDirection === 'right') {
      x.set(window.innerWidth)
      window.history.back()
    } else if (swipeConfidence && swipeDirection === 'left') {
      x.set(-window.innerWidth)
      window.history.forward()
    }
  }

  return (
    <motion.div
      style={{ x, opacity, width: '100%', height: '100vh' }}
      drag='x'
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleSwipe}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
      {props.children}
    </motion.div>
  )
}

export default SwipeContainer
