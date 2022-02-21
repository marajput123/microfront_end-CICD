import React from 'react'
import ReactDOM from 'react-dom';

const mount = (ele) => (
  ReactDOM.render(
    <div>hello</div>,
    document.querySelector(ele)
  )
)

if(process.env.NODE_ENV === 'development'){
  const element = document.querySelector("#dashboard-root")
  if(element){
    mount(element)
  }
}


export {mount}