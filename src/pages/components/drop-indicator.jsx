function DropIndicator ({ beforeId, column }) {
  return (
    <div
      data-before={beforeId || '-1'}
      data-column={column}
      className='my-1 h-0.5 rounded-md w-full bg-violet-500 opacity-0'
    />
  )
}

export default DropIndicator
