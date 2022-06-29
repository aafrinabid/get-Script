import React from 'react'

function BackgroundIamge() {
    let url='https://images.unsplash.com/photo-1580655653885-65763b2597d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    const divImage =  {
        // linear-gradient(180deg, rgba(1, 3, 15, 0.952), rgba(73, 69, 68, 0.64)),
      backgroundImage: `url(${url})`,
         height:'100vh',
      //    marginTop:'-70px',
      //    fontSize:'50px',
         backgroundSize: '125%',
         backgroundRepeat: 'no-repeat',
     };
  return (
    <div style={divImage}></div>
  )
}

export default BackgroundIamge