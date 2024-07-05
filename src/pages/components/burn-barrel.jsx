import { useState } from 'react'
import { SvgCampfire, SvgTrash } from '../assets/svg-card'

function BurnBarrel ({ setCards }) {
  const [active, setActive] = useState(false)

  const handleDragOver = (e) => {
    e.preventDefault()
    setActive(true)
  }

  const handleDragLeave = () => {
    setActive(false)
  }

  const handleDragEnd = (e) => {
    const cardId = e.dataTransfer.getData('cardId')
    setCards((pv) => pv.filter((c) => c.id !== cardId))
    setActive(false)
  }

  return (
    <article
      onDrop={handleDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`mt-[60px] grid h-60 w-60 shrink-0 place-content-center rounded-md ring-1 text-3xl ${
        active
          ? 'ring-red-800 bg-red-800/20 text-red-500'
          : 'ring-neutral-500 bg-neutral-500/20 text-neutral-500'
      }`}
    >
      {active ? <SvgCampfire className='animate-bounce' /> : <SvgTrash />}
    </article>
  )
}

export default BurnBarrel
