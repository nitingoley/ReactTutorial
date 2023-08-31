import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import About from './About';

function App()
{
      // it is for calulator only
  const[value , SetVal] = useState(''); 
  // This for my information
  const[data , SetData] = useState()
  const[show , SetShow] = useState()

return(

<div className="main">
      
<div className="container">
{/* <img src="IMG_20230102_172213_203.jpg" alt="IMG_20230102_172213_203.jpg" /> */}

<div className="cal" >
<form action="">
<div className="data">
<br />
<br />
<br />
  <input type="text" id='write' value={value}/>
</div>
<div>
<input type="button" value="Ac"  onClick={e=>SetVal('')} />
<input type="button" value="DE" onClick={e=>SetVal(value.slice(0 , -1))}/>
<input type="button" value="." onClick={e=>SetVal(value+e.target.value) }/>
<input type="button" value="/" onClick={e=>SetVal(value+e.target.value) } />
</div>

<div>
<input type="button" value="7"  onClick={e=>SetVal(value+e.target.value) }/>
<input type="button" value="8"  onClick={e=>SetVal(value+e.target.value) }/>
<input type="button" value="9"  onClick={e=>SetVal(value+e.target.value)}/>
<input type="button" value="+" onClick={e=>SetVal(value+e.target.value) }/>
</div>

<div>
<input type="button" value="4"  onClick={e=>SetVal(value+e.target.value)}/>
<input type="button" value="5"   onClick={e=>SetVal(value+e.target.value)}/>
<input type="button" value="6"  onClick={e=>SetVal(value+e.target.value) }/>
<input type="button" value="*"  onClick={e=>SetVal(value+e.target.value)}/>
</div>
<div>
<input type="button" value="3" onClick={e=>SetVal(value+e.target.value)}/>
<input type="button" value="2"  onClick={e=>SetVal(value+e.target.value)}/>
<input type="button" value="1"  onClick={e=>SetVal(value+e.target.value)}/>
<input type="button" value="-"  onClick={e=>SetVal(value+e.target.value)} />
</div>
<div>
<input type="button" value="0" onClick={e=>SetVal(value+e.target.value)}/>
<input type="button" value="00" onClick={e=>SetVal(value+e.target.value)} />
<input type="button" value="=" onClick={e=>SetVal(eval(value))} />
<input type="button" value="Ans" onClick={e=>SetVal(eval(value))}/>
</div>
</form>
</div>    
   <div className="content">

   <div className="name">

I am <span class="type">
<span>
<span>Nitin Goley</span>
<span> web developer</span>
<span>QA-Automation Tester</span>
<span>Programmer</span>
</span>
</span>

</div>

 {/* Now using Router to switch another page 
   */}
   <br />
   <br />
   <br />
   <br />

  <BrowserRouter>
    <Routes>
      <Route path='/About' element={<About/>} />
    </Routes>
  </BrowserRouter>

   </div>
    
</div>
</div>
)
}
export default App;