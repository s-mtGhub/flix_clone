import React from 'react'

export default function NotAvailable({msg="for Selected Genre"}) {
  return (
    <h1 className='not-available'> No movies {msg}</h1>
  );
}



