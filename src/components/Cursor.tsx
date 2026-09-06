import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })
  const ringX = useSpring(x, { stiffness: 200, damping: 30, mass: 0.6 })
  const ringY = useSpring(y, { stiffness: 200, damping: 30, mass: 0.6 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    setEnabled(fine)
    if (!fine) return

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
    }
    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setHovering(!!target.closest('a, button, [data-cursor-hover]'))
    }
    const leave = () => setVisible(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('pointermove', move)
    window.addEventListener('mouseover', over)
    document.documentElement.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('pointermove', move)
      window.removeEventListener('mouseover', over)
      document.documentElement.removeEventListener('mouseleave', leave)
    }
  }, [x, y])

  // Only ever hide the native cursor once our replacement is confirmed
  // on-screen and tracking real pointer input — never hide it blindly,
  // or a failure to init here leaves the user with no cursor at all.
  useEffect(() => {
    document.body.classList.toggle('cursor-hidden', visible)
    return () => document.body.classList.remove('cursor-hidden')
  }, [visible])

  if (!enabled) return null

  return (
    <>
      <motion.div
        style={{ left: springX, top: springY, opacity: visible ? 1 : 0 }}
        animate={{ scale: hovering ? 0 : 1 }}
        transition={{ scale: { duration: 0.2 } }}
        className="cursor-dot"
      />
      <motion.div
        style={{ left: ringX, top: ringY, opacity: visible ? 1 : 0 }}
        animate={{ scale: hovering ? 2.2 : 1 }}
        transition={{ scale: { type: 'spring', stiffness: 300, damping: 24 } }}
        className="cursor-ring"
      />
    </>
  )
}
