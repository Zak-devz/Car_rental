import React from 'react';

const testimonialData = [
  {
    name: 'Dilshad',
    image: '',
    description:
      'We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable.',
    aosDelay: '0',
  },
  {
    name: 'Satya',
    image: '',
    description:
      'The car was in great condition and made our trip even better. Highly recommend for this car rental website!',
    aosDelay: '300',
  },
  {
    name: 'Sabir',
    image: '',
    description:
      'Renting a car from this website was a breeze! The process was smooth and efficient',
    aosDelay: '1000',
  },
];
const Testimonial = () => {
  return (
    <>
      <span id='about'></span>
      <div className='dark:bg-black dark:text-white py-14 sm:pb-24'>
        <div className='container'>
          {/* Header */}
          <div className='space-y-4 pb-12'>
            <p className='text-3xl font-semibold text-center sm:text-4xl font-serif'>
              Reviewed by People
              <br /> Client's Testimonials
            </p>
            <p className='text-center sm:px-44'>
              Discover the positive impact we've made on the our clients by
              reading through their testimonials. Our clients have experienced
              our service and results, and they're eager to share their positive
              experiences with you.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white'>
            {testimonialData.map((skill) => (
              <div
                key={skill.name}
                className='card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300  rounded-lg '
              >
                <div className='grid place-items-center '>
                  <img
                    src='https://picsum.photos/200'
                    alt=''
                    className='rounded-full w-20 h-20'
                  />
                </div>
                <div className='text-2xl'>⭐⭐⭐⭐⭐</div>
                <p>{skill.description}</p>
                <p className='text-center font-semibold'>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
