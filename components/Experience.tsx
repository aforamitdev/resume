import React from 'react';

type Props = {};

const Experience = (props: Props) => {
  return (
    <section>
      <h2 className='text-lg font-semibold text-gray-500 dark:text-gray-400'>
        Experience
      </h2>
      <div className=' space-y-6 mt-2'>
        <div className=' space-y-2  print:border-none border white bg-opacity-40 rounded-lg p-2 print:p-0 '>
          <h3 className='text-sm font-bold dark:text-white'>
            <a href='https://www.powerkick.co.kr/' target='__blank'>
              PowerKick
            </a>
          </h3>
          <div className='grid grid-cols-2 text-gray-600 dark:text-gray-400  font-semibold '>
            <p className='text-sm'>Fullstack Developer</p>
            <p className='text-sm text-right'>Nov 2020 - Present</p>
          </div>
          <div className='ml-1 dark:text-white'>
            <div>
              <p className='text-sm text-gray-900 font-bold dark:text-white'>
                <a
                  href='https://c.powerkickcorp.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Kakao Sync
                </a>
              </p>
            </div>
            <p className='text-sm'>
              <div className=' space-y-1'>
                <p>
                  VueJS PWA clone application for powerkick application,
                  application synchronization 800+ powerkick applications across
                  south korea.
                </p>
                <p>Implemented gitlab CI/CD for deployment on AWS cloud. </p>
                <p>
                  Implemented featch such as Map markers, Auth 2.0 , Search ,
                  Payment Gateway.
                </p>
              </div>
            </p>
          </div>
          {/* search  */}
          <div className='ml-1'>
            <div>
              <p className='text-sm text-gray-900 font-bold dark:text-white'>
                <a
                  href='https://la.powerkickcorp.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Powerkick Logistic app
                </a>
              </p>
            </div>
            <p className='text-sm'>
              <div className=' space-y-1  list-disc dark:text-white'>
                <p>VueJS logistic application to mange powerkick stations.</p>
                <p>
                  Created easy to use interface swapping power banks, QR code
                  scanner for confirming swapping.{' '}
                </p>
                <p>
                  Implemented location-based QR verification for stations.
                  Created Dynamic search, live status for each station using
                  socket.io.
                </p>
                <p>
                  Ingratiated React PWA with google maps showing custom icons
                  for each station.{' '}
                </p>
              </div>
            </p>
          </div>
          {/* nft app */}
          <div className='ml-1'>
            <div>
              <p className='text-sm text-gray-900 font-bold dark:text-white'>
                <a
                  href='https://gallerychosun.valores.cc/'
                  target='_blank'
                  rel='noreferrer'
                >
                  gallerychosun
                </a>
              </p>
            </div>
            <p className='text-sm'>
              <div className=' space-y-1  list-disc dark:text-white'>
                <p>NFT mint app for gallerychosun </p>
                <p>
                  OpenSea api for minting panting, platform allows users to
                  place online Bids for panting.{' '}
                </p>
              </div>
            </p>
          </div>
        </div>

        <div className=' space-y-2 print:border-none border white bg-opacity-40 rounded-lg p-2 print:p-0 '>
          <h3 className='text-sm font-bold dark:text-gray-300'>
            <a href='https://we3academy.com/' target='__blank'>
              we3academy
            </a>
          </h3>
          <div className='grid grid-cols-2 text-gray-600 dark:text-gray-400  font-semibold  '>
            <p className='text-sm dark:text-white'>Backend Developer</p>
            <p className='text-sm text-right'>Jan 2020 - Nov 2020</p>
          </div>
          <p className='text-sm text-gray-600 dark:text-white'>
            As a backend developer for a web portal for an education-based
            platform, using GraphQL, TypeScript, and MongoDB, my
            responsibilities may include:
          </p>
          <p className='text-sm dark:text-white'>
            Using GraphQL to design and implement a flexible and efficient data
            schema for the web portal, and to build GraphQL APIs to allow the
            frontend to retrieve and manipulate data from the server.
          </p>
          <p className='text-sm dark:text-white'>
            Collaborating with other team members to design and implement new
            features and functionality for the web portal, using a combination
            of GraphQL, TypeScript, and MongoDB to build high-quality solutions.
          </p>
        </div>
        {/* chat */}
        <div className=' space-y-2 print:border-none border white bg-opacity-40 rounded-lg p-2 print:p-0 '>
          <h3 className='text-sm font-bold dark:text-white'>
            <a href='https://web.tuktuapi.com/' target='__blank'>
              Tuktu
            </a>
          </h3>
          <div className='grid grid-cols-2 text-gray-600 dark:text-gray-400  font-semibold '>
            <p className='text-sm'>React Native Developer </p>
            <p className='text-sm text-right'>Mar 2019 - Dec 2020</p>
          </div>
          <p className='text-sm'>
            <div className=' space-y-1 dark:text-white'>
              <p>Ported react native application to web interface</p>
              <p>
                web based application allows users to book demand support
                service for everyone.
              </p>
            </div>
          </p>
        </div>
        <div className=' space-y-1 print:border-none border white bg-opacity-40 rounded-lg p-2 print:p-0 '>
          <h3 className='text-sm font-bold dark:text-white'>
            <a href='https://marketxls.com/' target='__blank'>
              marketxls (Intern)
            </a>
          </h3>
          <div className='grid grid-cols-2 text-gray-600 dark:text-gray-400  font-semibold '>
            <p className='text-sm'>Software Developer</p>
            {/* <p className='text-sm text-right'>Nov 2014 - Nov 2015</p> */}
          </div>
          <p className='text-sm dark:text-white'>
            The project involved creating portfolio pages for S&P 500 companies.
          </p>
          <p className='text-sm dark:text-white'>
            The project used Gatsby framework to generate static pages for the
            companies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
