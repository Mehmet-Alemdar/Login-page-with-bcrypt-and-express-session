import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'
import "../index.css"

function Register() {
  const [accountCreated, setAccountCreated] = useState(false)
  const [user, setUser] = useState({
    name: '',
    surname: '',
    email: '',
    password: ''
  })

  const checkEmpties = () => {
    let isEmpty = true

    for(const i in user) {
      if(user[i].length !== 0){
        isEmpty = false
      }else {
        isEmpty = true
      }
    }

    return isEmpty
  }

  const cehckConditions = () => {

    let conditions = []

    if(user.email.length < 2) {
      conditions.push("Email must be at least two characters")
    }
    if(user.password.length < 3) {
      conditions.push("Passport must have at least three characters")
    }

    return conditions
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    
    if(checkEmpties()){
      alert("You entered incomplete information")
    }else {
      if(cehckConditions().length > 0 ){
        alert(cehckConditions())
      }else {
        axios.post('http://localhost:3000/register', {
          user
        }).then(() => {
          setAccountCreated(true)
        })
      }
    }
  }

  const registerPage = (
    <div className="w-full max-w-xs ">
      <form onSubmit={handleSubmit} className="bg-slate-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input onChange={(e) => setUser({...user, name: e.target.value})} value={user.name} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline uppercase" id="name" type="text" placeholder="Name" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="surname">
            Surname
          </label>
          <input onChange={(e) => setUser({...user, surname: e.target.value})} value={user.surname} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline uppercase" id="surname" type="text" placeholder="Surname" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            E-mail
          </label>
          <input onChange={(e) => setUser({...user, email: e.target.value})} value={user.email} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="E-mail" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input onChange={(e) => setUser({...user, password: e.target.value})} value={user.password} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="*******" />
          <div className={accountCreated ? 'block bg-green-200 px-5 py-1 text-center rounded shadow-md' : 'hidden '}>
            <p className="text-sm">Your account has been successfully created.</p>
            <Link to="/"><b className="text-violet-500 underline hover:text-violet-800 animate-pulse">Login</b></Link>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer" type="submit">
            Sign Up
          </button>
        </div>
      </form>
      <div className="bg-slate-200 w-full max-w-xs p-2 shadow-md rounded px-8 text-center">
        <p>Do you have an account? <Link to="/"><b className="text-indigo-500 hover:text-indigo-700">Login</b></Link> </p>
      </div>
    </div>
  )
  
  return (
    registerPage
  );
}

export default Register;