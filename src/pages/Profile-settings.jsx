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
  const { loginUser } = useAuth();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // existing code...
      
      const response = await fetch('http://localhost:8000/upload_avatar/', requestOptions);
      const data = await response.json();
  
      if (response.ok) {
        console.log('Successfully uploaded:', data);
        // Navigate or update state here
      } else {
        console.log('Upload failed:', data);
      }
  
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  
  return (
    <div>
      <NavBar />
      <div className="flex bg-zinc-900/70">
        <div className="bg-blue-600 p-10">
          <div className="bg-blue-300 border-2 rounded-xl p-2 mb-5">
            <p className="text-2xl">Account Settings</p>
            <p>Details about your Personal Information</p>
          </div>
          <div className="bg-blue-500 border-2 rounded-xl p-2">
            <p className="text-2xl">Password & Security</p>
            <p>Change your password</p>
          </div>
        </div>
        <div className="bg-white w-[40%] h-100 p-5 text-center m-10 ml-20 rounded-xl drop-shadow-2xl">
          <p className="text-4xl">Sean Yuan</p>
          <p>@username</p>
          <div className="p-20 mt-5 m-auto w-0 bg-black rounded-full"></div>
          <button className="bg-orange-500 p-3 mt-5 rounded text-white font-bold">Upload New Photo</button>
          <div className="bg-blue-500/10 border-2 border-blue-300 p-3 m-5 rounded-lg">
            <p>Upload a new avatar. Large image will be resized automatically.</p>
            <p className="mt-5">
              Maximum upload size is <span className="font-bold">1 MB</span>
            </p>
          </div>
          <p className="pt-14">
            Member since: <span className="font-bold">10 September 2023</span>
          </p>
        </div>

        <div className="w-full h-screen top-[90px] bg-zinc-900/70">
          <img
            src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            className="w-full h-full object-cover absolute -z-10">
          </img>
          </div>
        <h1 className="font-bold text-6xl pt-10 text-center text-black">Reach out to us!</h1>
        <div className="w-full h-[80%] text-center flex items-center justify-center px-4 text-black">
          <div className="flex flex-col mr-20">
            
            <div className="text-center w-[85%] h-full  bg-white m-10 rounded-xl drop-shadow-2xl">
              <div className="bg-gray-300 p-20 pb-0">
                <div>
                  <h1 className="font-bold text-4xl text-left">Edit Profile</h1>
                </div>
                <div className="flex pt-5">
                  <p className="mr-10 py-2 px-4 border-b-4 border-blue-500 font-bold">User info</p>
                  <p className="py-2 px-4 border-b-4 border-blue-500">Billing Information</p>
                </div>
              </div>
              <div className="p-20 pt-10">
                <form action="">
                  <div className="flex">
                    <div className="mr-20">
                      <label htmlFor="" className="text-left block">
                        Full Name*
                      </label>
                      <input type="text" name="" id="" className="border-2 rounded block p-2" />
                    </div>
                    <div>
                      <label htmlFor="" className="text-left block">
                        Email Address*
                      </label>
                      <input type="text" name="" id="" className="border-2 rounded block p-2" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-20">
                      <label htmlFor="" className="text-left block">
                        Address*
                      </label>
                      <input type="text" name="" id="" className="border-2 rounded block p-2" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-20">
                      <label htmlFor="" className="text-left block">
                        City*
                      </label>
                      <input type="text" name="" id="" className="border-2 rounded block p-2" />
                    </div>
                    <div>
                      <label htmlFor="" className="text-left block">
                        State/Province
                      </label>
                      <input type="text" name="" id="" className="border-2 rounded block p-2" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-20">
                      <label htmlFor="" className="text-left block">
                        Zip Code
                      </label>
                      <input type="text" name="" id="" className="border-2 rounded block p-2" />
                    </div>
                    <div>
                      <label htmlFor="" className="text-left block">
                        Country
                      </label>
                      <input type="text" name="" id="" className="border-2 rounded block p-2" />
                    </div>
                  </div>

                  <button className="bg-black mt-5 px-8 py-2 text-xl rounded-lg border-2 text-white border-white">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
      );
};

export default ProfilePic;
