import { motion } from 'framer-motion'
import DropIndicator from './drop-indicator'
import { SvgClipboard, SvgCopy } from '../assets/svg-card'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useEffect, useState } from 'react'

function Card ({ title, id, column, handleDragStart, active }) {
  const [copied, setCopied] = useState(false)
  // const [hover, setHover] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [copied])

  return (
    <section>
      <DropIndicator beforeId={id} column={column} />

      <motion.article
        layout
        layoutId={id}
        draggable='true'
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
        className='flex items-start justify-between rounded-md border dark:border-neutral-500 border-neutral-800 p-3 break-all whitespace-pre-wrap'
        // onMouseEnter={() => setHover(true)}
        // onMouseLeave={() => setHover(false)}
      >
        <p className='leading-normal hyphens-auto normal-case text-sm max-w-[192px]'>{title}</p>
        {/* {hover && ( */}

        {/* )} */}

        <CopyToClipboard text={title} onCopy={() => setCopied(true)}>
          <button type='button' className='cursor-pointer inset-8 mt-1.5'>
            {copied ? <SvgClipboard className='text-current' /> : <SvgCopy className='hover:text-violet-500 effect' />}
          </button>
        </CopyToClipboard>
      </motion.article>
    </section>
  )
}
export default Card
