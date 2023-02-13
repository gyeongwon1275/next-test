import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'

import { useSingleWebviewRouter } from './use-single-webview-router'

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
  const router = useSingleWebviewRouter()

  const [enableAnimation, setEnableAnimation] = useState(true)

  useEffect(() => {
    const handlePush = () => {
      console.log('push')

      setEnableAnimation(true)
    }

    window.addEventListener('push', handlePush)

    const handlePop = () => {
      console.log('pop', router.route)

      setEnableAnimation(false)
    }

    window.addEventListener('popstate', handlePop)

    return () => {
      window.removeEventListener('push', handlePush)
      window.removeEventListener('popstate', handlePop)
    }
  }, [])

  const onClickBack = () => {
    router.back()
  }

  return (
    <AnimatePresence initial={false} mode='wait'>
      <motion.main
        key={router.route}
        initial={enableAnimation ? AnimationState.Hide : AnimationState.Show}
        animate={AnimationState.Show}
        exit={AnimationState.Hide}
        variants={variants}
        transition={{ duration: 1, ease: 'easeInOut' }}>
        <>
          <div>
            {router.route !== '/' && (
              <button type='button' onClick={onClickBack}>
                back!
              </button>
            )}
          </div>

          {children}
        </>
      </motion.main>
    </AnimatePresence>
  )
}
