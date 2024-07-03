import { useState } from 'react'
import { motion } from 'framer-motion'
import { SvgPlus, SvgX } from '../assets/svg-card'
import { SvgCircle, SvgMinus, SvgRefresh, SvgRhombus, SvgSpacingHorizontal, SvgSquare } from '../assets/svg-editor'

function AddCard ({ column, setCards }) {
  const [text, setText] = useState('')
  const [adding, setAdding] = useState(false)

  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  const insertIcon = (icon) => {
    const textarea = document.getElementById('task-textarea')
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const newText = text.substring(0, start) + icon + text.substring(end)
    setText(newText)
    textarea.focus()
    textarea.setSelectionRange(start + icon.length, start + icon.length)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!text.trim().length) return

    const newCard = {
      column,
      title: text.trim(),
      id: Math.random().toString()
    }
    setCards((pv) => [...pv, newCard])
    setAdding(false)
    setText('')
  }

  const handleClose = () => {
    setAdding(false)
    setText('')
  }

  const handleRefresh = () => {
    setText('')
  }

  return (
    <section>
      {adding
        ? (
          <motion.form className='mt-[18px] font-medium' layout onSubmit={handleSubmit}>
            <div className='mb-2.5 py-1 px-3 flex justify-between items-center rounded-md border border-neutral-500'>
              <button type='button' onClick={() => insertIcon('○ ')} className='btn-editor'>
                <SvgCircle />
              </button>

              <button type='button' onClick={() => insertIcon('▢ ')} className='btn-editor'>
                <SvgSquare />
              </button>

              <button type='button' onClick={() => insertIcon('◇ ')} className='btn-editor'>
                <SvgRhombus />
              </button>

              <button type='button' onClick={() => insertIcon('   ')} className='btn-editor'>
                <SvgSpacingHorizontal />
              </button>

              <button type='button' onClick={() => insertIcon('─')} className='btn-editor'>
                <SvgMinus />
              </button>

              <button type='button' onClick={handleRefresh} className='btn-editor'>
                <SvgRefresh />
              </button>
            </div>

            <textarea
              id='task-textarea'
              onChange={handleTextChange}
              autoFocus
              value={text}
              rows={5}
              placeholder='Task description...'
              className='w-full caret-orange-500 resize-none rounded-md p-3 text-sm dark:placeholder:text-neutral-200 placeholder:text-neutral-500 focus:outline-0 bg-transparent border dark:border-neutral-500 border-neutral-800'
            />

            <div className='flex text-neutral-50 items-center justify-end gap-x-2 text-xs'>
              <button onClick={handleClose} className='btn-close effect'>
                <SvgX />
                <span>Close</span>
              </button>

              <button type='submit' className='btn-add mt-1.5 px-3'>
                <SvgPlus />
                <span>Add task</span>
              </button>
            </div>
          </motion.form>
          )
        : (
          <motion.button layout onClick={() => setAdding(true)} className='btn-add justify-center w-full mt-[18px] text-neutral-50 text-sm'>
            <SvgPlus />
            <span>New task</span>
          </motion.button>
          )}
    </section>
  )
}

export default AddCard
