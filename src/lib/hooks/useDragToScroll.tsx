/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from 'react'

export const useDragToScroll = (ourRef: any) => {
  const [isMouseDown, setIsMouseDown] = useState(false)
  const mouseCoords = useRef({
    startY: 0,
    scrollTop: 0,
  })

  const handleDragStart = (e: any) => {
    if (!ourRef.current) return
    const container = ourRef.current
    const startY = e.pageY - container.offsetTop
    const scrollTop = container.scrollTop
    mouseCoords.current = { startY, scrollTop }
    setIsMouseDown(true)
    document.body.style.cursor = 'grabbing'
  }

  const handleDragEnd = () => {
    setIsMouseDown(false)
    document.body.style.cursor = 'default'
  }

  const handleDrag = (e: any) => {
    if (!isMouseDown || !ourRef.current) return
    e.preventDefault()
    const container = ourRef.current
    const y = e.pageY - container.offsetTop
    const walkY = (y - mouseCoords.current.startY) * 1.5 // Calculate vertical scroll change
    container.scrollTop = mouseCoords.current.scrollTop - walkY // Apply vertical scroll change
  }

  return {
    onMouseDown: handleDragStart,
    onMouseUp: handleDragEnd,
    onMouseMove: handleDrag,
  }
}
