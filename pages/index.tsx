import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import Header from '../components/Header';
import Experience from '../components/Experience';
import Skills from '../components/elements/Skills';
import TechStack from '../components/TechStack';
import Education from '../components/Education';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Amit Rai Resume</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='w-full  main-bg  flex justify-center content-center px-2  '>
        <div className=' max-w-screen-lg bg-white dark:bg-slate-900 mx-auto   flex flex-col flex-grow rounded-lg   bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-75 dark:bg-opacity-80 border border-gray-100 shadow-xl my-10 bg-transparent '>
          <div className='w-full max-w-screen-lg bg-white dark:bg-slate-900 mx-auto h-full  flex flex-col flex-grow rounded-lg shadow-sm  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-75 dark:bg-opacity-80 border border-gray-100 shadow-xl'>
            <Header />
            <main className='  flex-grow flex flex-col md:flex-row'>
              <div className='w-full md:w-7/12 p-4'>
                <Experience />
              </div>
              <div className='w-full md:w-4/12  px-4 space-y-6 md:border-l'>
                <TechStack />
                <Education />
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
