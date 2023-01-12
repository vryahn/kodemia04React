import './App.css';
import User from "./components/User"
//import Modal from "./components/Modal"
import {useState, useEffect} from "react"

export default function App() {
  const [users, setUser] = useState(null)
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=30")
    .then(result => result.json())
    .then(data => setUser(data.results))
    //
  },[])
  return (
    
    <h1 className="text-3xl font-bold underline">
      Hello world!
      { users ?
        users.map(user =>{
          return <span key={user.id.value || user.phone}>{user.name.first}</span>
        })
        : <span>cargando...</span> }
    </h1>
  )
}