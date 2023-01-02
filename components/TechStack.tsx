import React from 'react';
import Skills from './elements/Skills';

type Props = {};

function TechStack({}: Props) {
  return (
    <section className='mt-2'>
      <h2 className='text-lg font-semibold text-gray-500 dark:text-gray-400'>
        Tech Stack
      </h2>
      <div className=' space-y-3 mt-2'>
        <div>
          <h3 className='text-sm font-bold'>Languages</h3>
          <div className='flex flex-wrap text-xs'>
            <span className='px-1 py-1 '>
              <span className='bg-gray-50 dark:bg-slate-800 px-1 py-0.5 rounded-lg bg-opacity-50'>
                Javascript
              </span>
            </span>
            <span className='px-1 py-1 '>
              <span className='bg-gray-50 dark:bg-slate-800 px-1 py-0.5 rounded-lg bg-opacity-50'>
                Typescript
              </span>
            </span>
            <span className='px-1 py-1 '>
              <span className='bg-gray-50 dark:bg-slate-800 px-1 py-0.5 rounded-lg bg-opacity-50'>
                Go
              </span>
            </span>

            <span className='px-1 py-1 '>
              <span className='bg-gray-50 dark:bg-slate-800 px-1 py-0.5 rounded-lg bg-opacity-50'>
                SQL
              </span>
            </span>
          </div>
        </div>
        <div>
          <h3 className='text-sm font-bold'>Frontend</h3>
          <div className='flex flex-wrap text-xs'>
            <span className='px-1 py-1 '>
              <span className='bg-gray-50 dark:bg-slate-800 px-1 py-0.5 rounded-lg bg-opacity-50'>
                HTML
              </span>
            </span>
            <span className='px-1 py-1 '>
              <span className='bg-gray-50 dark:bg-slate-800 px-1 py-0.5 rounded-lg bg-opacity-50'>
                CSS
              </span>
            </span>
            <span className='px-1 py-1 '>
              <span className='bg-gray-50 dark:bg-slate-800 px-1 py-0.5 rounded-lg bg-opacity-50'>
                React
              </span>
            </span>

            <span className='px-1 py-1 '>
              <span className='bg-gray-50 dark:bg-slate-800 px-1 py-0.5 rounded-lg bg-opacity-50'>
                Vue.Js
              </span>
            </span>
            <span className='px-1 py-1 '>
              <span className='bg-gray-50 dark:bg-slate-800 px-1 py-0.5 rounded-lg bg-opacity-50'>
                Tailwind css
              </span>
            </span>
          </div>
        </div>
        <div>
          <h3 className='text-sm font-bold'>Backend</h3>
          <div className='flex flex-wrap text-xs'>
            <span className='px-1 py-1 '>
              <Skills name='Node.JS' />
            </span>
            <span className='px-1 py-1 '>
              <Skills name='Postgres' />
            </span>
            <span className='px-1 py-1 '>
              <Skills name='Redis' />
            </span>
            <span className='px-1 py-1 '>
              <Skills name='REST' />
            </span>
            <span className='px-1 py-1 '>
              <Skills name='GraphQL' />
            </span>
            <span className='px-1 py-1 '>
              <Skills name='mongoDB' />
            </span>
          </div>
        </div>
        <div>
          <h3 className='text-sm font-bold'>Frameworks</h3>
          <div className='flex flex-wrap text-xs'>
            <span className='px-1 py-1 '>
              <Skills name='Express' />
            </span>
            <span className='px-1 py-1 '>
              <Skills name='Next.Js' />
            </span>
            <span className='px-1 py-1 '>
              <Skills name='Vue.JS' />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
