import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
import { SvgArrowRight } from '../resources/assets/svg-global'
import { listColums, menuCadrs } from './utils/menu-landing'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export function LandingPage () {
  return (
    <main>
      <Navbar />
      <section className='mt-16 md:mt-24 text-4xl md:text-6xl text-center font-bold'>
        <h1>Organize {' '}
          <span className='relative inline-flex'>
            <span className='bg-gradient-to-r from-pink-500 to-blue-500 blur-lg filter opacity-30 w-40 h-20 absolute inset-0' />
            <span className='relative'>your</span>
          </span>
          {' '} tasks<span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-teal-500'>.</span>
        </h1>

        <span className='leading-tight relative'>Explore </span>
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
          className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-teal-500'
        />
      </section>

      <section className='flex flex-col justify-center mt-8'>
        <h3 className='text-center px-8 md:px-0 text-base md:text-lg'>
          A visual board to manage tasks, making use of local storage
        </h3>

        <div className='flex justify-center font-medium text-base text-neutral-50 mt-8'>
          <div className='relative group'>
            <div className='absolute rounded-md blur-md opacity-75 -inset-0.5 bg-gradient-to-r from-pink-500 to-blue-500' />
            <div className='relative flex justify-center items-center divide-x-2 divide-teal-500 rounded-md px-6 py-2.5 bg-neutral-800'>
              <h4 className='mr-4'>JessEleven</h4>
              <Link to='/board' className='flex items-center gap-x-0.5'>
                <span className='ml-4'>Get Started</span>
                <SvgArrowRight className='mt-0.5' />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='flex justify-center mt-8'>
        <div className='w-[502px] h-auto overflow-hidden'>
          <div className='flex justify-center items-center'>
            <div className='flex flex-col justify-center w-48 md:w-72 h-[400px] md:h-[494px] rounded-md skew-y-[45deg] -rotate-45 ring-1 ring-current'>
              <div className='text-base md:text-xl text-center space-y-4 font-medium px-4 md:px-6 lg:px-9'>

                {listColums?.map((op) => (
                  <article key={op.title} className='flex justify-between py-4 px-4 ring-1 ring-current rounded-md'>
                    <h3 className={`${op.headingColor}`}>{op.title}</h3>
                    <div className='flex items-center gap-x-0.5'>
                      <span>{op.icon}</span>
                      <span>{op.cards}</span>
                    </div>
                  </article>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mt-8 mb-16 md:mb-24'>
        <h3 className='text-3xl font-semibold text-center'>
          An application that uses
        </h3>

        <p className='text-base md:text-lg text-center mt-4 px-4 md:px-0'>
          It aims to be simple, without going beyond the extraordinary
          <br className='hidden md:block' /> with its functionalities and tools.
        </p>

        <div className='flex justify-center mt-6'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-0'>

            {menuCadrs?.map((op) => (
              <article key={op.title} className='rounded-md w-full effect ring-transparent hover:ring-neutral-500 ring-1 md:w-60 p-5 bg-gradient-to-r from-neutral-200 to-slate-100 dark:bg-gradient-to-r dark:from-neutral-900 dark:to-neutral-700'>
                <div className='flex items-center justify-between'>
                  <h3 className='text-xl font-semibold'>{op.title}</h3>
                  <h4 className={`bg-slate-500 bg-opacity-25 p-2 rounded-full ${op.headingColor}`}>{op.icon}</h4>
                </div>
                <p className='text-base mt-2'>{op.content}</p>
              </article>
            ))}

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
