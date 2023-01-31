
import React from 'react'
import { useState } from 'react'
import { Button } from 'semantic-ui-react'

function App() {

  const [count, setCount] = useState(0);
  const handleIncrement = () => (
    setCount(count + 1)
  )
  const handleDecrement = () => (
    setCount(count-1)
  )
  return (
    <div className='ui container center aligned' style={{top: '10rem'}}>
      <h1>Count</h1>
      <h2>{count}</h2>
      <div>
        <Button onClick={handleIncrement} className='ui positive button'>Increment</Button>
        <Button onClick={handleDecrement} className={count<=0 ? 'ui disabled button' : 'ui negative button'}>Decrement</Button>
        <br></br>
        <p style={{top: '10px'}}>Done by Ashish Kumar Singh (12015585)</p>
      </div>
    
    </div>
  )
}

export default App