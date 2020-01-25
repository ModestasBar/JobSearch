import React from "react";

export default function InputField({ url, setUrl }) {
  return (
    <div className='dib w-80'>
      <h1>{url}</h1>
      <label className='db fw6 lh-copy f6' htmlFor='email-address'>
        URL
      </label>
      <input
        className='pa2 input-reset ba bg-transparent w-100'
        type='email'
        name='email-address'
        id='email-address'
        onChange={e => setUrl((url = e.target.value))}
      />
    </div>
  );
}
