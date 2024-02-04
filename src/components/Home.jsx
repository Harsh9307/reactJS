import React from 'react'
import Product from './Product'
const Home = () => {
  const arr=[1,2,3,4,5,6,7,8,9,10,11];
  return (
    <div>
      {
        arr.map((i)=>(
          <Product value={i} key={i}/>
        ))
      }
    </div>
    
  )
}

export default Home