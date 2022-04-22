import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios';

function Profile() {
  const history = useHistory()
  const [user, setUser] = useState([])
  const [image, setImage] = useState("")


  useEffect(() => {
    axios.get("http://localhost:3000/profile")
    .then((response) => {
      if(response.status === 200) {
        setUser(response.data)

        setImage(response.data.image)

      }else {
        alert(response.data)
        history.push("/")
      }
    })
  }, [])

  useEffect(() => {
    axios.post("http://localhost:3000/profile/image", {image})

  }, [image])

  const handleChange = (e) => {
    console.log(e.target.files[0]);

    const reader = new FileReader()

    reader.addEventListener("load", () => {
      setImage(reader.result)
    })

    reader.readAsDataURL(e.target.files[0])
  }

  const logout = () => {
    axios.post("http://localhost:3000/profile/logout").then((response) => {
      if(response.status === 200) {
        history.push("/")
      } else {
        alert(response.data)
      }
    })
  }

  const profilePage = (
    <div className='bg-slate-200 w-full max-w-xs flex flex-col items-center rounded shadow-lg shadow-slate-400/30'>
      <div className='mb-5 flex flex-col items-center'>
        {image 
          ? <img src={image} alt="image" className='w-full h-full rounded-t shadow-lg shadow-slate-400/50 object-cover cursor-pointer duration-300 hover:shadow-slate-500/50'>
          </img> 
          : <img src='https://img.icons8.com/material-rounded/344/administrator-male.png' alt="image" className='w-36 h-36 ' />
        }
        <input type='file' name='file' id='files' onChange={handleChange} className="hidden"></input>
        <label for="files">
          <svg class="h-8 w-8 text-indigo-400 cursor-pointer hover:text-indigo-600"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
          </svg>
        </label>
      </div>
      <div className='w-full flex flex-col items-center mb-6 py-1 bg-gradient-to-r from-indigo-500 to-indigo-800  shadow-lg shadow-slate-500/50 '>
        <label className="block text-black text-sm font-bold mb-1">Name</label>
        <p className='text-white pb-2'>{user.name}</p>
      </div>
      <div className='w-full flex flex-col items-center mb-6 py-1 bg-gradient-to-r from-indigo-500 to-indigo-800  shadow-lg shadow-slate-500/50 '>
        <label className="block text-black text-sm font-bold mb-1">Surname</label>
        <p className='text-white pb-2'>{user.surname}</p>
      </div>
      <div className='w-full flex flex-col items-center mb-4 py-1 bg-gradient-to-r from-indigo-500 to-indigo-800  shadow-lg shadow-slate-500/50 '>
        <label className="block text-black text-sm font-bold mb-1">E-mail</label>
        <p className='text-white pb-2'>{user.email}</p>
      </div>
      <div className='mt-1 mb-2'>
        <button onClick={logout} className='w-28 h-10  rounded  font-bold text-indigo-600 duration-300 hover:text-white hover:bg-gradient-to-r from-indigo-500 to-indigo-800 hover:shadow-lg hover:shadow-slate-400/40'>Logout</button>
      </div>
    </div>
  )

  return (
    profilePage
  )
}

export default Profile;