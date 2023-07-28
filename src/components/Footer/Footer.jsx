import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer py-16">
      <div className="flex flex-col px-32  ">
    <div className="flex text-white font-semibold text-base justify-between" >
      <div>
        <h2>Icons</h2>
      </div>
    <div className="space-y-6">
      <h2>Products</h2>
      <div className="space-y-3">
        <h4>Hello</h4>
        <h4>Hi</h4>
        <h4>Hi</h4>
        <h4>Hi</h4>
      </div>
    </div>
    <div className="space-y-6">
      <h2>Resources</h2>
      <div className="space-y-3">
        <h4>Hello</h4>
        <h4>Hi</h4>
        <h4>Hi</h4>
        <h4>Hi</h4>
      </div>
      </div>
      <div>
      <h2>Organization</h2>
      </div>
    </div>
      </div>
  </footer>
  )
}

export default Footer
