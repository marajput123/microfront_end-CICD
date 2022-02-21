import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom';
import Landing from './components/Landing'
import Pricing from "./components/Pricing"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route exact component={Pricing} path='/pricing'/>
        <Route component={Landing} path='/'/>
      </BrowserRouter>
    </div>
  )
}

export default App