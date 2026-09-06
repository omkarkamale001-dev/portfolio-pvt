import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const start = performance.now()
    const duration = 1200
    let frame: number

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setCount(Math.round(progress * 100))
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      } else {
        setTimeout(() => setGone(true), 250)
      }
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <AnimatePresence onExitComplete={onDone}>
      {!gone && (
        <motion.div
          className="preloader"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="preloader-row">
            <span>Omkar Kamale</span>
            <span className="preloader-count">{count}%</span>
          </div>
          <div className="preloader-bar">
            <motion.div
              className="preloader-bar-fill"
              animate={{ width: `${count}%` }}
              transition={{ ease: 'linear', duration: 0.1 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
