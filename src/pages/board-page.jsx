import { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
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
    <main>
      <Navbar />

      <h2 className='mt-5 text-center text-xl md:text-2xl font-bold'>Welcome to your board 🎉</h2>

      <div className='mt-5 mx-4 xl:mx-0'>
        <div className='relative w-full h-[550px] overflow-x-auto'>
          <div className='flex xl:justify-center absolute w-full gap-4'>
            <Column
              title='New'
              column='new'
              headingColor='text-yellow-500'
              cards={cards}
              setCards={setCards}
            />
            <Column
              title='Backlog'
              column='backlog'
              headingColor='text-rose-500'
              cards={cards}
              setCards={setCards}
            />
            {/*    <Column
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
      </div>
    </main>
  )
}
