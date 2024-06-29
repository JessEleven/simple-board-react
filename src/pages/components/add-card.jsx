import { useState } from 'react'
import { motion } from 'framer-motion'
import { SvgPlus, SvgXmark } from '../assets/svg-card'
import { SvgAlignHorizontalSpacing, SvgCircle, SvgMinusSquare, SvgRefresh, SvgRhombus, SvgSquare } from '../assets/svg-editor'

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
    <>
      {adding
        ? (
          <motion.form className='mt-4' layout onSubmit={handleSubmit}>
            <div className='mb-2.5 flex items-center justify-between'>

              <button type='button' onClick={() => insertIcon('○ ')} className='flex items-center justify-center bg-neutral-100 rounded p-1.5 text-indigo-400'>
                <SvgCircle />
              </button>

              <button type='button' onClick={() => insertIcon('▢ ')} className='flex items-center justify-center bg-neutral-100 rounded p-1.5 text-indigo-400'>
                <SvgSquare />
              </button>

              <button type='button' onClick={() => insertIcon('◇ ')} className='flex items-center justify-center bg-neutral-100 rounded p-1.5 text-indigo-400'>
                <SvgRhombus />
              </button>

              <button type='button' onClick={() => insertIcon('   ')} className='flex items-center justify-center bg-neutral-100 rounded p-1.5 text-indigo-400'>
                <SvgAlignHorizontalSpacing />
              </button>

              <button type='button' onClick={() => insertIcon('─')} className='flex items-center justify-center bg-neutral-100 rounded p-1.5 text-indigo-400'>
                <SvgMinusSquare />
              </button>

              <button type='button' onClick={handleRefresh} className='flex items-center justify-center bg-neutral-100 rounded p-1.5 text-indigo-400'>
                <SvgRefresh />
              </button>
            </div>

            <textarea
              id='task-textarea'
              onChange={handleTextChange}
              autoFocus
              value={text}
              rows={3}
              placeholder='Add new task 🚀'
              className='w-full rounded-md border border-violet-400 p-3 text-sm text-neutral-50 placeholder-zinc-200 focus:outline-0 bg-violet-400/10'
            />

            <div className='flex text-zinc-200 items-center justify-end gap-2 text-xs font-medium'>
              <button onClick={handleClose} className='btn-close effect'>
                <SvgXmark />
                <span>Close</span>
              </button>

              <button type='submit' className='btn-add effect mt-1.5 px-3'>
                <SvgPlus />
                <span>Add task</span>
              </button>
            </div>
          </motion.form>
          )
        : (
          <motion.button layout onClick={() => setAdding(true)} className='btn-add effect justify-center w-full mt-[18px] text-zinc-200 text-sm font-medium'>
            <SvgPlus />
            <span>New task</span>
          </motion.button>
          )}
    </>
  )
}

export default AddCard
