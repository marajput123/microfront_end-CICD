import React, {useRef, useEffect} from 'react';
import {mount} from "marketing/marketingApp"


const MarketingComponent = () => {
  const rootDiv = useRef()
  useEffect(() => {
    mount(rootDiv.current)
  });
  console.log('hr')

  return (
    <div ref={rootDiv}></div>
  )
}

export default MarketingComponent;