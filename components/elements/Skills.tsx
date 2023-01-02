import React from 'react';

type Props = {
  name: string;
};

const Skills = (props: Props) => {
  return (
    <span className='bg-gray-50 dark:bg-slate-800 px-1 py-0.5 rounded-lg bg-opacity-50'>
      {props.name}
    </span>
  );
};

export default Skills;
