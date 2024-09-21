"use client";
import Link from 'next/link';
import React from 'react';

const AboutStudent = () => {
  return (
    <div className='flex justify-center items-center gap-5 mt-5 text-2xl text-orange-500 flex-col'>
        <h1>About Student</h1>
        <p>This is about student component.</p>
        {/* <Link href="/about">Go to About Page</Link> */}
    </div>
  )
}

export default AboutStudent