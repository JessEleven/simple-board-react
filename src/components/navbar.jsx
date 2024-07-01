import { Link } from 'react-router-dom'
import ThemeButton from '../theme/theme-button'
import MenuMobile from './menu-mobile'

function Navbar () {
  return (
    <nav className='border-b border-orange-500'>
      <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
        <div className='flex h-14 items-center justify-between'>
          <Link translate='no' to='/' className='flex gap-x-1.5 items-center'>
            <img src='/logo.svg' alt='SB' className='w-7 h-7' />
            <h1 className='text-xl hidden md:flex items-center font-semibold'>Simple Board</h1>
          </Link>

          <div className='md:flex md:items-center md:gap-4'>
            <nav className='hidden md:block'>
              <ul className='flex items-center gap-x-4 text-base font-medium'>
                <li>
                  <Link to='/board' className='hover:text-orange-500 effect'>
                    Board
                  </Link>
                </li>

                <li>
                  <Link to='/about' className='hover:text-orange-500 effect'>
                    About
                  </Link>
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
    </nav>
  )
}

export default Navbar
