import NavBar from '../components/NavBar';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/AuthContext';
const ProfilePic = () => {
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');  // Redirect to the login page if not logged in
    } else {
      // Fetch the user's name from the server
      const fetchName = async () => {
        const requestOptions = {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          }
  }
  const response = await fetch('http://localhost:8000/users/me/', requestOptions);
  const data = await response.json();
  setName(data.name);  // Assuming the response object has a 'name' field
};
fetchName();
}
}, [])

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
      // Only append the file if it exists
  if (file) {
    formData.append('avatar', file);
  }

  // Only append the name if it exists
  if (name) {
    formData.append('name', name); 
  }


    const token = localStorage.getItem('token');
    const requestOptions = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData
    };

    const response = await fetch('http://localhost:8000/upload_avatar/', requestOptions);
    const data = await response.json();
    for (var key of formData.entries()) {
      console.log(key[0] + ', ' + key[1]);
    }
    
    if (response.ok) {
      console.log('Successfully uploaded:', data);
      // Navigate or update state here
    } else {
      console.log('Upload failed:', data);
    }
  };
  return (
    <div>
      <NavBar />

      <div className="w-full h-screen top-[90px] bg-zinc-900/70">
        <img
          src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          className="w-full h-full object-cover absolute -z-10"
        ></img>
        <h1 className="font-bold text-6xl pt-10 text-center text-white">Reach out to us!</h1>
        <div className="w-full h-[80%] text-center flex items-center justify-center px-4 text-white">
          <div className="flex flex-col mr-20">
            <label className="text-2xl" htmlFor="name">
              Name:
            </label>
            <input className="text-black" type="text" name="name" id="name" placeholder={name} onChange={handleNameChange}/>

            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">
              Upload Profile Picture
            </label>
            <input
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input"
              type="file"
              onChange={handleFileChange}
            ></input>

            <button onClick={handleSubmit}  className="bg-black mt-5 p-1 text-xl rounded-lg border-2 border-white">Submit</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePic;
