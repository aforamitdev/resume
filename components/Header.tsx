import React from 'react';

type Props = {};

function Header({}: Props) {
  return (
    <header className='px-4 py-2  border-b relative space-y-2'>
      <h1 className='text-2xl font-bold uppercase  '>Amit Rai</h1>
      <div className='space-y-3'>
        <p className=' font-semibold'>Fullstack Developer.</p>
        <div className='flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-4 text-xs font-medium'>
          <a href='mailto:aforamitrai@gmail.com' className='flex gap-1'>
            <span className='flex'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                ></path>
              </svg>
            </span>
            aforamitrai@gmail.com
          </a>
          <a href='https://github.com/aforamitdev' className='flex gap-1'>
            <span>
              <svg fill='currentColor' className='h-4 w-4' viewBox='0 0 24 24'>
                <path
                  fillRule='evenodd'
                  d='M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </span>
            aforamitdev
          </a>
          <a
            href='https://www.upwork.com/freelancers/~0149bb32835959c800?viewMode=1'
            className='flex gap-1'
          >
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
                ></path>
              </svg>
            </span>
            upwork.com
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
