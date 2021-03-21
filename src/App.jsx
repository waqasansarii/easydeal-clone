import React, { useState, useEffect } from 'react'
import './App.css';
import RouterApp from './router/router';
import Loader from './components/loader/loader'

function App() {

  let [loading, setLoading] = useState(false)


  useEffect(() => {

    setTimeout(() => {
      setLoading(true)
      console.log('settimeout')
    }, 2000)

  }, [])

  if (!loading) {
    return <Loader />
  }

  return (
    <div className='app'>
      <RouterApp />
    </div>
  );
}

export default App;
