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
  
  // input state and representation state

  const [guest, setNumber] = useState([0,0,0,0,0]);
  const [repre, setRepre] = useState(["*","*","*","*","*"])

  const handleChange = (e) => {
    const newGuest = [...guest]
    newGuest[e.target.className] = e.target.value
    setNumber(newGuest)
  }
  const handleValidation = (guest,number_to_guest) => {
    const newRepre = [...repre]
    const up_repre = Array.from(document.getElementsByClassName("upRepre")[0].children)
    const down_repre = Array.from(document.getElementsByClassName("downRepre")[0].children)
    guest.map( (num, idx) => {
      num = Number(num)
      if ( num === number_to_guest[idx]){
        newRepre[idx] = num
        
      }})

    number_to_guest.map( (num, idx) => {
      up_repre[idx].classList.remove("colorUpRed")
      up_repre[idx].classList.remove("colorUpWhite")
      down_repre[idx].classList.remove("colorDownWhite")
      down_repre[idx].classList.remove("colorDownRed")
    if ( guest[idx] > num){
      up_repre[idx].classList.add("colorUpRed")
      down_repre[idx].classList.add("colorDownWhite")

    }else if (guest[idx] < num){
      down_repre[idx].classList.add("colorDownRed")
      up_repre[idx].classList.add("colorUpWhite")
      
        
    }})
    setRepre(newRepre)
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
      {/* is up hint */}
      <div className="upRepre">
        { number_to_guest.map( (_,idx) => {
            return (<div key={idx} className={`up colorUpWhite`}>
            </div>)

          })
        }

      </div>


      {/* guest inputs */}
      <div className="number_user">
        {number_to_guest.map( (_, idx) => {
          return <InputComponent
          key={idx}
          num={idx} 
          handle={handleChange} />
        })}
      </div>
      
      {/* is down hint */}
      <div className="downRepre">
      { number_to_guest.map( (_,idx) => {
            return (<div key={`down${idx}`} className={"down colorDownWhite"}>
            </div>)

          })
        }
      </div>
      <button onClick={ () => handleValidation(guest, number_to_guest)}>Validate</button>

    </div>
  )
}

export default App
