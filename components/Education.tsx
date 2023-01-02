import React from 'react';

type Props = {};

const Education = (props: Props) => {
  return (
    <section>
      <h2 className='text-lg font-semibold text-gray-500 dark:text-gray-400'>
        Education
      </h2>
      <div className=' space-y-6 mt-2'>
        <div>
          <h3 className='text-sm font-bold '>BE in information technology</h3>
          <div className=' text-gray-600 dark:text-gray-400  '>
            <p className='text-sm'>
              {' '}
              Xavier institute of engineering , Mumbai University
            </p>
            <p className='text-sm'>2016 - 2020</p>
          </div>
        </div>
        {/* <div>
          <h3 className='text-sm font-bold '>Wesbos LearnNode Program</h3>
          <div className=' text-gray-600 dark:text-gray-400  '>
            <p className='text-sm'>Reference ID: #5a16bcaf46721c3f51ddc73a</p>
            <p className='text-sm'>2017</p>
          </div>
        </div>
        <div>
          <h3 className='text-sm font-bold '>
            {' '}
            Udemy Build Responsive Real World Websites with HTML5 and CSS3
          </h3>
          <div className=' text-gray-600 dark:text-gray-400  '>
            <p className='text-sm'>Certificate No:UC-YG33KUCD</p>
            <p className='text-sm'>2017</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Education;
