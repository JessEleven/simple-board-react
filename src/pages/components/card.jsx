import { motion } from 'framer-motion'
import DropIndicator from './drop-indicator'
import { SvgCopy } from '../assets/svg-card'
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
    <>
      <DropIndicator beforeId={id} column={column} />

      <motion.article
        layout
        layoutId={id}
        draggable='true'
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
        className='cursor-grab flex items-start justify-between rounded-md dark:bg-neutral-800 bg-neutral-300 p-3 active:cursor-grabbing break-words normal-case whitespace-pre-wrap'
        // onMouseEnter={() => setHover(true)}
        // onMouseLeave={() => setHover(false)}
      >
        <p className='leading-relaxed text-sm font-medium max-w-[190px]'>{title}</p>
        {/* {hover && ( */}

        {/* }  )} */}

        <CopyToClipboard text={title} onCopy={() => setCopied(true)}>
          <button type='button' className='cursor-pointer pt-1.5'>
            {copied ? '☑️' : <SvgCopy className='hover:text-violet-400 effect' />}
          </button>
        </CopyToClipboard>
      </motion.article>
    </>
  )
}
export default Card
