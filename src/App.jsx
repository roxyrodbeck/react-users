import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

  //create state to hold user data
  const [users, setUsers] = useState([])
  // useState creates the actual state that returns 2 things - the state itself, users, and a function i must use when i want to change the state
  //must use the function to set state, in this case setUsers

  // make api call to get user data when the page loads

  useEffect(
    () => {
      console.log('page loading')
      //make api call for user data, get makes the call, then is what you do w/ it and catchis the error function 
      axios.get('https://dummyjson.com/users')
      .then(res => {
        console.log(res.data.users)
        //I have my data, where do i put it? state.
        //store in state
        setUsers(res.data.users)
      })
      .catch(err => console.log(err))
    }, []
  )

  return (

      <div>
       <h1>Hello React</h1>
       <div className="user-container">
        {/* <p>{users[0].firstName}</p> */}
        {
          users.map(item=>
            <div className="card">
          <p>{item.firstName} {item.lastName}</p>
          <img src={item.image} />
          <p>{item.company.name}</p>
          </div>
          )
        }
       </div>
      </div>
  )
}

export default App
