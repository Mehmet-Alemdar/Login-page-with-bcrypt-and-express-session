import React from 'react';

function Profile() {
  const profilePage = (
    <div className='bg-slate-200 w-full max-w-xs flex flex-col items-center pt-10 pb-12 rounded shadow-lg shadow-slate-400/30'>
      <div className='mb-10'>
        <img className='w-24 h-24 rounded-full shadow-lg shadow-slate-500/50 cursor-pointer duration-300 hover:w-28 hover:h-28 ' 
          src='https://ichef.bbci.co.uk/news/976/cpsprodpb/67CF/production/_108857562_mediaitem108857561.jpg' alt='profile'/>
      </div>
      <div className='w-full flex flex-col items-center mb-6 py-1 bg-gradient-to-r from-indigo-500 to-indigo-800  shadow-lg shadow-slate-500/50 '>
        <label className="block text-black text-sm font-bold mb-1">Name</label>
        <p className='text-white pb-2'>userName</p>
      </div>
      <div className='w-full flex flex-col items-center mb-6 py-1 bg-gradient-to-r from-indigo-500 to-indigo-800  shadow-lg shadow-slate-500/50 '>
         <label className="block text-black text-sm font-bold mb-1">Surname</label>
        <p className='text-white pb-2'>userSurname</p>
      </div>
      <div className='w-full flex flex-col items-center mb-4 py-1 bg-gradient-to-r from-indigo-500 to-indigo-800  shadow-lg shadow-slate-500/50 '>
         <label className="block text-black text-sm font-bold mb-1">E-mail</label>
        <p className='text-white pb-2'>userMail</p>
      </div>
      <div className='mt-10'>
        <button className='w-28 h-10  rounded  font-bold text-indigo-600 duration-300 hover:text-white hover:bg-gradient-to-r from-indigo-500 to-indigo-800 hover:shadow-lg hover:shadow-slate-400/40'>Logout</button>
      </div>
    </div>
    
  )
  return (
    profilePage
  )
}

export default Profile;