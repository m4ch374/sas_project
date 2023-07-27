import React, { useEffect, useRef, useState } from "react";

type TMousePos = {
  x: number,
  y: number,
}

const useThrottledHover = (mousePos: TMousePos={ x: 0, y: 0 }, delay=100) => {
  const [throttledMouse, setThrottledMouse] = useState<TMousePos>(mousePos)

  const wait = useRef(false)

  useEffect(() => {
    if (wait.current) return

    setThrottledMouse(mousePos)
    wait.current = true

    setTimeout(() => {
      wait.current = false
    }, delay)
  }, [mousePos.x, mousePos.y])

  return throttledMouse
}

const useTypeWriterEffect = (fullTitle: string, delay=80) => {
  const [title, setTitle] = useState("")

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTitle(fullTitle.substring(0, title.length + 1))
    }, delay)

    return () => clearTimeout(timeout)
  }, [title])

  return title
}

const HoverSkewBanner: React.FC = () => {
  const container = useRef<HTMLDivElement>(null)

  const typeWriterTitle = useTypeWriterEffect("Input customer info")
  const debtToIncRatio = useTypeWriterEffect("2.33")

  const [mousePos, setMousePos] = useState<TMousePos>()
  const throttledMouse = useThrottledHover(mousePos)

  const handleMouseOver = (e: React.MouseEvent) => {
    setMousePos({
      x: e.clientX,
      y: e.clientY
    })
  }

  const handleMouseLeave = () => {
    if (!container.current) return

    container.current.style.transform = `rotateX(0deg) rotateY(0deg)`
  }

  useEffect(() => {
    const refElem = container.current
    if (!refElem || typeof mousePos === 'undefined') return

    const refElemCenter: TMousePos = {
      x: refElem.offsetLeft + refElem.clientWidth / 2,
      y: refElem.offsetTop + refElem.clientHeight / 2
    }

    const refMousePos = {
      x: throttledMouse.x - refElemCenter.x,
      y: throttledMouse.y - refElemCenter.y
    }

    const cap = 20
    const skewInfo = {
      x: Math.min(cap, Math.max(cap * refMousePos.y / (refElem.clientHeight / 2), -cap)),
      y: Math.min(cap, Math.max(cap * refMousePos.x / (refElem.clientWidth / 2), -cap))
    }

    container.current.style.transform = `perspective(900px) 
      rotateX(${skewInfo.x}deg) rotateY(${skewInfo.y}deg) `
  }, [throttledMouse])

  return (
    <div ref={container} className="
        max-w-[1000px]
        w-[90%]
        aspect-[2/1] 
        bg-[#f0f0f0]
        text-[#2b2b2b]
        rounded-md
        transition-all
        duration-[100ms]
        hover:custom-drop-shadow
        p-4
        flex
        flex-col
      "
      onMouseMove={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className="text-4xl">{typeWriterTitle}<span className="animate-pulse">_</span></h1>
      <div className="text-3xl">
        <div className="text-xl">
          <h3>Debt to income ratio:</h3>
          <input placeholder={debtToIncRatio} className="bg-slate-300 rounded-md placeholder:text-black/90 text-sm px-2 py-1.5 font-medium" />
        </div>
      </div>
      <h1 className="relative top-10 text-2xl font-mono">Result: Financial Illiterate</h1>
    </div>
  )
}

export default HoverSkewBanner
