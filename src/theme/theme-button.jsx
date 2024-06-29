import { useEffect, useState } from 'react'
import menuIcons from './index.js'

function ThemeButton () {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'system'
  )
  const element = document.documentElement
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')

  const applyTheme = () => {
    if (theme === 'dark') {
      element.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else if (theme === 'light') {
      element.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      localStorage.removeItem('theme')

      if (darkQuery.matches) {
        element.classList.add('dark')
      } else {
        element.classList.remove('dark')
      }
    }
  }

  useEffect(() => {
    console.log('Initial theme:', theme)
    console.log('Initial darkQuery.matches:', darkQuery.matches)
    applyTheme()

    const handleSystemThemeChange = (e) => {
      console.log('System theme changed:', e.matches)
      if (!localStorage.getItem('theme')) {
        if (e.matches) {
          element.classList.add('dark')
        } else {
          element.classList.remove('dark')
        }
      }
    }

    darkQuery.addEventListener('change', handleSystemThemeChange)

    return () => {
      darkQuery.removeEventListener('change', handleSystemThemeChange)
    }
  }, [theme, darkQuery])

  return (
    <div className='flex items-center'>
      {menuIcons.map((item) => (
        <button
          type='button'
          key={item.text}
          onClick={() => {
            console.log('Setting theme:', item.text)
            setTheme(item.text)
          }}
          className={`w-7 h-7 ${theme === item.text && 'bg-red-400'}`}
        >
          {item.icon}
        </button>
      ))}
    </div>
  )
}

export default ThemeButton
