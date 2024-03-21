import './App.css'
import NumContainers from './components/NumContainer'
import {useState} from 'react'

// create a random number
const randomNum = (min:number, max:number) => {
	min = Math.ceil(min); 
	max = Math.floor(max); 
	return Math.floor(Math.random() * (max - min) + min); }

// random numbers list
let number_to_guest: number[];


function App() {
  // input state
  const [number, setNumber] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value)
    setNumber(e.target.value)
  }
  // create numbers
  number_to_guest = [0,0,0,0,0].map( num => randomNum(num,10))
  // create items with the random number and her representation
  const  items = number_to_guest.map( (num) => {
    return {num:num, representation: "*"}
  })
  console.log(items)


  return (
    <div className="container">

      {/* representation */}
      <div className="number_repres">
        {items.map( (item, idx) => {
          return <NumContainers key={idx} item={item} />
        })}

      </div>
      
      {/* guest inputs */}
      <div className="number_user">
        <input 
          value={number} 
          onChange={handleChange}
        ></input>

        {items.map( (item, idx) => {
          return <input key={idx} type="text" className={item.representation} />
        })}
      </div>
     
    </div>
  )
}

export default App
