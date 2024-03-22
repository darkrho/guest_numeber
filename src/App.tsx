import './App.css'
import NumContainers from './components/NumContainer'
import InputComponent from './components/InputComponent'
import {useState} from 'react'

// create a random number
const randomNum = (min:number, max:number) => {
	min = Math.ceil(min); 
	max = Math.floor(max); 
	return Math.floor(Math.random() * (max - min) + min); }

// random numbers list
const  number_to_guest = [0,0,0,0,0].map( num => randomNum(num,10))


function App() {
  
  // input state
  const [guest, setNumber] = useState([0,0,0,0,0]);
  const [repre, setRepre] = useState(["*","*","*","*","*"])

  const handleChange = (e) => {
    const newGuest = [...guest]
    newGuest[e.target.className] = e.target.value
    setNumber(newGuest)
  }
  const handleValidation = (guest,number_to_guest) => {
    console.log(guest, number_to_guest)
    guest.map( (num, idx) => {
      num = Number(num)
      if ( num === number_to_guest[idx]){
        const newRepre = [...repre]
        console.log(newRepre)
        newRepre[idx] = num
        setRepre(newRepre)
      }}
    )
  }
  
  // create numbers
  
 
  return (
    <div className="container">

      {/* representation */}
      <div className="number_repres">
        {number_to_guest.map( (num, idx) => {
          return <NumContainers key={idx} num={num} repre={repre[idx]} />
        })}

      </div>
      
      {/* guest inputs */}
      <div className="number_user">
        {number_to_guest.map( (num, idx) => {
          return <InputComponent
          key={idx}
          num={idx} 
          handle={handleChange} />
        })}
      </div>
      <button onClick={ () => handleValidation(guest, number_to_guest)}>Validate</button>
     
    </div>
  )
}

export default App
