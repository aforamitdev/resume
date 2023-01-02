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
          <h3 className='text-sm font-bold dark:text-gray-300'>Languages</h3>
          <div className='flex flex-wrap text-xs'>
            <span className='px-1 py-1 '>
              <Skills name='Javascript' />
            </span>
            <span className='px-1 py-1 '>
              <Skills name='Typescript' />
            </span>
            <span className='px-1 py-1 '>
              <Skills name='GO' />
            </span>

            <span className='px-1 py-1 '>
              <Skills name='SQL' />
            </span>
          </div>
        </div>
        <div>
          <h3 className='text-sm font-bold dark:text-gray-300'>Frontend</h3>
          <div className='flex flex-wrap text-xs'>
            <span className='px-1 py-1 '>
              <Skills name='HTML' />
            </span>
            <span className='px-1 py-1 '>
              <Skills name='CSS' />
            </span>
            <span className='px-1 py-1 '>
              <Skills name='React.JS' />
            </span>

            <span className='px-1 py-1 '>
              <Skills name='Vue.Js' />
            </span>
            <span className='px-1 py-1 '>
              <Skills name='Tailwind css ' />
            </span>
          </div>
        </div>
        <div>
          <h3 className='text-sm font-bold dark:text-gray-300'>Backend</h3>
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
          <h3 className='text-sm font-bold dark:text-gray-300'>Frameworks</h3>
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
