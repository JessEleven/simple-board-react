import { useEffect, useState } from 'react'
import Column from './components/column'
import BurnBarrel from './components/burn-barrel'

export function BoardPage () {
  const [cards, setCards] = useState([])
  const [hasChecked, setHasChecked] = useState(false)

  useEffect(() => {
    hasChecked && localStorage.setItem('cards', JSON.stringify(cards))
  }, [cards])

  useEffect(() => {
    const cardData = localStorage.getItem('cards')
    setCards(cardData ? JSON.parse(cardData) : [])
    setHasChecked(true)
  }, [])

  return (
    <div className='pt-5'>
      <h3 className='text-center text-2xl font-bold'>Welcome to your board 🎉</h3>
      <div className='flex justify-center h-screen gap-4 pt-5'>
        <Column
          title='New Task'
          column='new'
          headingColor=''
          cards={cards}
          setCards={setCards}
        />
        <Column
          title='Backlog'
          column='backlog'
          headingColor='text-red-500'
          cards={cards}
          setCards={setCards}
        />
        {/*  <Column
          title='Active'
          column='todo'
          headingColor='text-yellow-400'
          cards={cards}
          setCards={setCards}
        /> */}
        <Column
          title='In progress'
          column='doing'
          headingColor='text-blue-500'
          cards={cards}
          setCards={setCards}
        />
        <Column
          title='Complete'
          column='done'
          headingColor='text-emerald-500'
          cards={cards}
          setCards={setCards}
        />
        <BurnBarrel setCards={setCards} />
      </div>
    </div>
  )
}
