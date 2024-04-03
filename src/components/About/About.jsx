import React from 'react';
import CarPng from '../../assets/car1.png';

const About = () => {
  return (
    <div className='dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center'>
          <img
            src={CarPng}
            alt=''
            className='sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]'
          />
          <div>
            <div className='space-y-5 sm:p-16 pb-6'>
              <h1 className='text-3xl sm:text-4xl font-bold font-serif'>
                About us
              </h1>
              <p className='leading-8 tracking-wide'>
                Our journey is fueled by passion, leading us to embrace every
                twist and turn, crafting a narrative that resonates with our
                values and purpose. As we navigate through challenges and
                triumphs, each mile traveled strengthens our commitment to
                excellence and innovation, propelling us forward towards new
                horizons.
              </p>
              <button className='rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black'>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
