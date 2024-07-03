import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-router-dom'
import { SvgArrowRight } from '../resources/assets/svg-global'

export function LandingPage () {
  const options = [
    {
      title: 'Drag & Drop',
      icon: 'a',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quia molestias quasi cum quas sit culpa sequi veritatis repellendus dolor at eveniet suscipit dolore'
    },
    {
      title: 'Local Storage',
      icon: 'a',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quia molestias quasi cum quas sit culpa sequi veritatis repellendus dolor at eveniet suscipit dolore'
    },
    {
      title: 'Animation',
      icon: 'a',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quia molestias quasi cum quas sit culpa sequi veritatis repellendus dolor at eveniet suscipit dolore'
    }
  ]

  return (
    <main className='mt-24'>
      <div className='relative'>
        <section className='absolute top-[18px] inset-0 flex justify-center items-center'>
          <div className='flex flex-col justify-center ring-1 ring-blue-500 p-3 w-44 md:w-56 h-96 md:h-[502px] rounded-lg skew-y-[45deg] -rotate-45 bg-neutral-500 dark:bg-neutral-500 bg-opacity-10 dark:bg-opacity-20'>
            <div className='text-2xl md:text-3xl text-center font-medium text-blue-500'>
              <h3 className='leading-loose'>New Task</h3>
              <h3 className='leading-loose'>Backlog</h3>
              <h3 className='leading-loose'>In progress</h3>
              <h3 className='leading-loose'>Complete</h3>
            </div>
          </div>
        </section>

        <section className='relative text-3xl md:text-6xl lg:text-7xl text-neutral-800 dark:text-neutral-50 text-opacity-50 dark:text-opacity-50 leading-tight text-center font-bold'>
          <h2>Organize your tasks</h2>
          <span className='leading-tight'>Explore </span>
          <TypeAnimation
            sequence={[
              'simplicity',
              2500,
              'creativity',
              2500,
              'freshness',
              2500
            ]}
            speed={20}
            wrapper='span'
            repeat={Infinity}
            className='text-purple-500 lowercase dark:text-emerald-500'
          />
        </section>

        <section className='relative mt-6 flex flex-col justify-center'>
          <h3 className='text-center px-4 md:px-0 text-xl font-medium'>
            A visual board to manage tasks, making use of local storage
          </h3>

          <div className='flex justify-center font-medium text-base mt-6'>
            <div className='relative'>
              <div className='absolute rounded-md blur-[10px] opacity-75 -inset-0.5 bg-purple-500 dark:bg-emerald-500' />
              <div className='relative rounded-md px-4 py-2 bg-gradient-to-r from-neutral-800 to-neutral-600'>
                <Link to='/board' className='flex items-center gap-x-0.5 text-base font-medium text-neutral-50'>
                  <span>Get Started</span>
                  <SvgArrowRight className='mt-0.5' />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className='mt-24 mb-12'>
        <h3 className='text-3xl font-bold text-center'>
          An application that uses
        </h3>
        <p className='text-xl font-medium text-center mt-4 px-4 md:px-0'>
          It aims to be simple, without going beyond the extraordinary with its functionalities and tools.
        </p>
        <div className='flex justify-center mt-4'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-0'>
            {options.map((op) => (
              <article key={op.title} className='rounded-md w-full effect ring-transparent hover:ring-blue-500 ring-1 md:w-60 p-5 bg-gradient-to-r from-neutral-300 to-slate-100 dark:bg-gradient-to-r dark:from-neutral-900 dark:to-neutral-700'>
                <div className='flex items-center justify-between'>
                  <h4 className='text-xl font-semibold'>{op.title}</h4>
                  <h4>{op.icon}</h4>
                </div>
                <p className='text-base font-medium'>{op.content}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
