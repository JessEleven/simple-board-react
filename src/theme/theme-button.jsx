import { useEffect, useState } from 'react'
import menuIcons from './menu-icon'

function ThemeButton () {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'system'
  )
  const element = document.documentElement
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')

  function onWindowMatch () {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && darkQuery.matches)) {
      element.classList.add('dark')
    } else {
      element.classList.remove('dark')
    }
  }

  useEffect(() => {
    onWindowMatch()
    if (darkQuery) {
      darkQuery.addEventListener('change', (e) => {
        if (!('theme' in localStorage)) {
          if (e.matches) {
            element.classList.add('dark')
          } else {
            element.classList.remove('dark')
          }
        }
      })
    }
  }, [])

  useEffect(() => {
    switch (theme) {
      case 'dark':
        element.classList.add('dark')
        localStorage.setItem('theme', 'dark')
        break
      case 'light':
        element.classList.remove('dark')
        localStorage.setItem('theme', 'light')
        break
      default:
        localStorage.removeItem('theme')
        onWindowMatch()
        break
    }
  }, [theme])

  return (
    <div className='flex border rounded-md border-orange-500 py-1.5 px-2.5 items-center gap-x-1.5'>
      {menuIcons.map((item) => (
        <button
          type='button'
          key={item.text}
          onClick={() => { setTheme(item.text) }}
          className={`${theme === item.text && 'text-orange-500'}`}
        >
          <p>{item.icon}</p>
        </button>
      ))}
    </div>
  )
}

export default ThemeButton
