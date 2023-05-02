import React from 'react'
import ShirtProvider from './components/Context/ShirtProvider'
import MainHome from './components/MainHome'
const App = () => {
  return (
    <ShirtProvider>
      <MainHome/>
    </ShirtProvider>
    
  )
}

export default App
