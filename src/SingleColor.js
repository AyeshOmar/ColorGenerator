import React, { useEffect, useState } from 'react';

const SingleColor = ({listColor,index,hex}) => {


const[alert,setAlert]=useState(false)
const rgb =listColor.rgb.join(',')


useEffect(()=>{
const outTime=setTimeout(()=>{
setAlert(false)
},2000)


},[alert])



  return (

    <article className='colors' 
    style={{backgroundColor:`rgb(${rgb})`,

color:listColor.type==='tint'? 'black':'white'
}}
   
onClick={()=>{
    setAlert(true)
    navigator.clipboard.writeText("#"+listColor.hex)
}}
    >
<p>{listColor.weight}%</p>
<p>#{hex}</p>
      
{
alert && <p className='alert'>Color copied to clipboard</p>
}


    </article>
  );
}

export default SingleColor;
