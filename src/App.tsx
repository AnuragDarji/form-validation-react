import React from 'react'
import Form from './FormValidation/Form'

const App = () => {
  return (
    <div style={{ width: '100%', margin: '3rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{color: '#424242', borderBottom: '1px solid blue'}}>Form Validation</h1>
      <br/>
      <Form />
    </div>
  )
}

export default App