import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {UC, LC,NC,SC} from './data/PassChar'
function App() {
  const [uppercase, setUpperCase] = useState(false)
  const [lowercase, setLowerCase] = useState(false)
  const [charactercase, setCharacterCase] = useState(false)
  const [numbercase, setNumberCase] = useState(false)
  const [passwordlength, setPasswordLength] = useState(8)
  const [fPass, setFPass] = useState('')
  let createpassword=()=>{
    let charSet=''
    let finalPass='';
    if(uppercase||lowercase||charactercase||numbercase) {
       if(uppercase) charSet+=UC;
       if(lowercase) charSet+=LC;
       if(numbercase) charSet+=NC;
        if(charactercase) charSet+=SC;
       for(let i=0;i<passwordlength;i++){
        finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length));
       }
       setFPass(finalPass)
       console.log(finalPass)
  }
  else {
    alert("choose type of password");
  } }
  return (
  <div className="main-container">
    <div className="card">
      <h1>Password Generator</h1>
      
      <div className="input-group">
        <input type="text" placeholder={fPass ? fPass : "Password"}  readOnly />
        <button onClick={() => {
    if(fPass) {
      navigator.clipboard.writeText(fPass);
      alert("Password Copied!");
    }
  }}>Copy</button>
      </div>

      <div className="options">
        <div className="slider-group">
          <input type="range" min={6} max={20} value={passwordlength} onChange={(e) => setPasswordLength(e.target.value)} />
          <label>Length: {passwordlength}</label>
        </div>
        
        <div>
          <input type="checkbox" checked={numbercase} onChange={()=>setNumberCase(!numbercase)} id="numbers" />
          <label htmlFor="numbers" > Include Numbers</label>
        </div>

        <div>
          <input type="checkbox" id="chars" checked={charactercase} onChange={()=>setCharacterCase(!charactercase)}/>
          <label htmlFor="chars" > Include Special Characters</label>
        </div>
        <div>
          <input type="checkbox" id="chars" checked={uppercase} onChange={()=>setUpperCase(!uppercase)}/>
          <label htmlFor="chars" > Include Upper Case</label>
        </div>
        <div>
          <input type="checkbox" id="chars" checked={lowercase} onChange={()=>setLowerCase(!lowercase)}/>
          <label htmlFor="chars" > Include Lower Case</label>
        </div>
        <div><button onClick={createpassword}> Generate Password</button></div>
      </div>
    </div>
  </div>
)
}

export default App
