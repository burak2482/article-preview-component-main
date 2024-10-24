'use client';

import Image from 'next/image';
import './globals.css';
import Button from './components/Button';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isOpened, setOpened] = useState(false);

  function handleisOpened() {
    setOpened(!isOpened);
  }

  useEffect(() => {
    console.log('Popup durumu:', isOpened);
  }, [isOpened]);

  return (
    <main className='flex flex-col justify-center items-center min-h-screen bg-customLightGrayishBlue px-3'>
      <section className='flex flex-col justify-center items-center bg-white w-full max-w-4xl md:flex md:flex-row'>
        <div className='relative h-56 md:h-96 overflow-hidden w-full'>
          <Image 
            src='/drawers.jpg' 
            alt='Furniture' 
            className='object-cover w-full h-full rounded-2xl' 
            fill 
            quality={100} 
          />
        </div>
        <div className='p-8'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-semibold'>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
            <h2 className='text-lg font-normal mt-3'>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I&apos;ve got some simple tips to help you make any room feel complete.</h2>
          </div>
          <div className='relative flex flex-row justify-between mt-7 md:flex-row'>
            {isOpened ? (
              <div className='bg-customGrey p-8 md:p-12 flex flex-row justify-between items-center w-full h-3 rounded-full'>
                <button onClick={handleisOpened} className='flex items-center justify-center'>
                <Image 
                    src='/icon-share.svg'
                    alt='Share' 
                    width={50} 
                    height={50}
                    className='mr-1 md:mr-1'
                  />
                <span class='tracking-widest text-3xl text-white font-bold mr-3'>BACK</span>
                </button>
                <Image src='/icon-facebook.svg' alt='Facebook' width={50} height={50} className='mr-3 cursor-pointer' />
                <Image src='/icon-twitter.svg' alt='Twitter' width={50} height={50} className='mr-3 cursor-pointer' />
                <Image src='/icon-pinterest.svg' alt='Pinterest' width={50} height={50} className='cursor-pointer' />
              </div>
            ) : (
              <div className='flex flex-row md:flex md:flex-row'>
                <Image 
                  src='/avatar-michelle.jpg' 
                  alt='Michelle Appleton' 
                  className='rounded-full mr-5 md:mr-5' 
                  width={50} 
                  height={50} 
                />
                <div>
                  <h1 className='text-lg font-semibold mr-3'>Michelle Appleton</h1>
                  <h2 className='text-lg font-normal mr-3 text-gray-400'>28 Jun 2020</h2>
                </div>
              </div>
            )}
            <Button isOpened={isOpened} setOpened={setOpened} />
          </div>
        </div>
      </section>
    </main>
  );
}
