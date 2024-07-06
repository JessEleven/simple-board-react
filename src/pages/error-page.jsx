import { Link } from 'react-router-dom'
import { SvgArrowRight } from '../resources/assets/svg-global'

export function ErrorPage () {
  return (
    <main className='flex items-center justify-center h-screen'>
      <section className='text-center dark:text-neutral-50 text-neutral-800'>
        <h2 className='text-2xl font-bold text-orange-500'>404</h2>
        <h2 className='mt-4 text-2xl sm:text-4xl font-bold tracking-tight'>
          Page not found
        </h2>
        <p className='mt-4 leading-7 text-base px-8 lg:px-0'>
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className='mt-8 flex items-center justify-center gap-x-6'>
          <Link to='/' className='flex place-items-center gap-x-0.5 dark:bg-neutral-50 bg-neutral-800 dark:text-neutral-800 text-neutral-50 rounded-md px-4 py-2 text-base font-medium'>
            <span>Go back landing</span>
            <SvgArrowRight className='mt-0.5' />
          </Link>
        </div>
      </section>
    </main>
  )
}
