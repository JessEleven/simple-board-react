import { Link } from 'react-router-dom'
import { SvgGitHub } from '../resources/assets/svg-global'

function Footer () {
  return (
    <footer className='border-t border-neutral-500'>
      <div className='container px-0 md:px-8 py-8 mx-auto flex items-center sm:flex-row flex-col'>

        <Link translate='no' className='flex items-center font-medium md:justify-start justify-center cursor-text'>
          <img src='/logo.svg' alt='SB' className='w-6 h-6' />
          <h2 className='ml-1.5 text-base'>Simple Board</h2>
        </Link>

        <h4 className='text-sm font-medium sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-current sm:py-2 sm:mt-0 mt-4'>
          © 2024 — JessEleven
        </h4>

        <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
          <Link to='https://github.com/JessEleven' target='_blank' className='tex'>
            <SvgGitHub className='fill-current' />
          </Link>
        </span>
      </div>
    </footer>
  )
}

export default Footer
