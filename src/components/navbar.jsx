import { NavLink } from 'react-router-dom'
import ThemeButton from '../theme/theme-button'
import MenuMobile from './menu-mobile'

function Navbar () {
  return (
    <header>
      <div className='container mx-auto px-4 md:px-8'>
        <div className='flex h-14 items-center justify-between'>

          <NavLink translate='no' to='/' exact className='flex gap-x-1.5 items-center'>
            <img src='/logo.svg' alt='SB' className='w-7 h-7' />
            <h2 className='text-xl hidden md:flex items-center font-bold'>Simple Board</h2>
          </NavLink>

          <div className='md:flex md:items-center md:gap-4'>
            <nav className='hidden md:block'>
              <ul className='flex items-center gap-x-4 text-base font-medium'>
                <li>
                  <NavLink to='/board' className={({ isActive }) => isActive && 'text-teal-500'}>
                    Board
                  </NavLink>
                </li>

                <li>
                  <NavLink to='/about' className={({ isActive }) => isActive && 'text-teal-500'}>
                    About
                  </NavLink>
                </li>
              </ul>
            </nav>

            <div className='flex items-center gap-4'>
              <div className='hidden md:flex'>
                <ThemeButton />
              </div>
              <div className='block md:hidden'>
                <MenuMobile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
