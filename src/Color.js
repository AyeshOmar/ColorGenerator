import React, { useState } from 'react';
import Values from 'values.js';
import SingleColor from './SingleColor';


const Color = () => {

const[erroor,setErroor]=useState(false);
const[color,setColor]=useState('');

const[list ,setList]=useState([]);







const handleSubmit=(e)=>{
e.preventDefault();
try{
    const colors= new Values(color).all(10)
     setList(colors)
     setErroor(false)
    
}catch(error){
    setErroor(true)

}

}



  return (
    <>
    <section className='container'>
      
<div className='header'>


<h1>Color Generator</h1>
<form onSubmit={handleSubmit}>
<input className='colorInput' type='color'/>

<input 
 type='text'
 placeholder='#f2e584'
 onChange={(e)=>{
setColor(e.target.value)
 }}

 className={`${erroor ? 'errorclass': 'input'}`}

 />
<button type='submit' className='btnSubmit'>Submit</button>

</form>

</div>

<div className='footer'>
{
list.map((colr,indexClr)=>{

return <SingleColor index={indexClr} listColor={colr} hex={colr.hex}/>

})


}

</div>

     
     </section>
     </>
  );
}

export default Color;
