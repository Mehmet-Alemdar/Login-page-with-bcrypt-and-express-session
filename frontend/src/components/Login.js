import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"
import "../index.css"

axios.defaults.withCredentials = true

function Login() {
  const history = useHistory()
  const[user, setUser] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    axios.get("http://localhost:3000/login").then((response) => {
      if(response.status === 200) {
        history.push("/profile")
      }
    })
  },[])

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

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(checkEmpties()){
      alert("You entered incomplete information")
    }else {
      axios.post("http://localhost:3000/login", {
        user,
        withCredentials: true
      }).then((response) => {
        if(response.status === 200){
          history.push("/profile")
        }else {
          alert(response.data)
        }
      })
    }
  }


  const loginPage = (
    <div className="w-full max-w-xs ">
      <form onSubmit={handleSubmit} className="bg-slate-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
            Login
          </button>
          <Link to="/register" >
            <button to="/register" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer" type="button">
              Sign Up
            </button>
          </Link>
        </div>
        <br />
        <Link to="/">
            <p className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">Forgot Password?</p>
        </Link>
      </form>
    </div>
  )
  
  return (
    loginPage
  );
}

export default Login;